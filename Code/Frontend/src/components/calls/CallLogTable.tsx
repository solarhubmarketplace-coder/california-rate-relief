"use client";

import { useState, useMemo } from "react";
import { CallLog } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Clock, Eye, Loader2 } from "lucide-react";
import { format } from "date-fns";

interface CallLogTableProps {
  callLogs: CallLog[];
  isLoading?: boolean;
}

export function CallLogTable({
  callLogs,
  isLoading,
}: CallLogTableProps) {
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedCall, setSelectedCall] = useState<CallLog | null>(null);
  const [audioDialogOpen, setAudioDialogOpen] = useState(false);

  // Client-side filtering by status
  const filteredLogs = useMemo(() => {
    if (statusFilter === "all") {
      return callLogs;
    }
    return callLogs.filter((log) => (log as any).status === statusFilter);
  }, [callLogs, statusFilter]);

  const handleStatusFilter = (value: string) => {
    setStatusFilter(value);
  };

  const playRecording = (call: CallLog) => {
    setSelectedCall(call);
    setAudioDialogOpen(true);
  };

  const formatDuration = (seconds: number) => {
    if (seconds === 0) return "—";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getOutcomeBadgeVariant = (outcome: CallLog["outcome"]): any => {
    switch (outcome) {
      case "booked":
      case "qualified":
        return "default";
      case "failed":
      case "dnc":
        return "destructive";
      case "voicemail":
      case "hangup":
      case "not_qualified":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const getOutcomeLabel = (outcome: string) => {
    if (!outcome) return "Unknown";
    return outcome.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const getStatusBadgeVariant = (status: string): any => {
    switch (status) {
      case "completed":
        return "default";
      case "failed":
      case "canceled":
        return "destructive";
      case "no-answer":
      case "busy":
        return "secondary";
      case "in-progress":
      case "ringing":
        return "default";
      default:
        return "secondary";
    }
  };

  const getStatusLabel = (status: string) => {
    if (!status) return "Unknown";
    return status.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Call History</h3>
        <Select value={statusFilter} onValueChange={handleStatusFilter}>
          <SelectTrigger className="w-[180px] bg-white hover:bg-primary/20 hover:text-primary transition-colors">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className="hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors">All Status</SelectItem>
            <SelectItem value="declined" className="hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors">Declined</SelectItem>
            <SelectItem value="no-answer" className="hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors">No Answer</SelectItem>
            <SelectItem value="completed" className="hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors">Completed</SelectItem>
            <SelectItem value="failed" className="hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Lead</TableHead>
              <TableHead>Date/Time</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Outcome</TableHead>
              <TableHead>Attempt</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="h-32 text-center">
                  <Loader2 className="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
                </TableCell>
              </TableRow>
            ) : filteredLogs.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="h-32 text-center text-muted-foreground"
                >
                  No call logs found
                </TableCell>
              </TableRow>
            ) : (
              filteredLogs.map((call) => (
                <TableRow
                  key={call.id}
                  className="transition-colors hover:bg-accent/50"
                >
                  <TableCell>
                    <p className="font-medium text-foreground">
                      {call.lead_name}
                    </p>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {format(new Date(call.created_at), "MMM d, h:mm a")}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span className="font-mono text-sm">
                        {formatDuration(call.duration_seconds)}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={getStatusBadgeVariant(
                        (call as any).status || "unknown"
                      )}
                      className="capitalize"
                    >
                      {getStatusLabel((call as any).status || "unknown")}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={getOutcomeBadgeVariant(call.outcome)}
                      className="capitalize"
                    >
                      {getOutcomeLabel(call.outcome)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">
                      #{(call as any).attempt_number || 1}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 bg-white hover:bg-primary/20 hover:text-primary transition-colors"
                        onClick={() => playRecording(call)}
                        title="View call details"
                      >
                        <Eye className="h-4 w-4" />
                        View Details
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Audio Player Dialog */}
      <Dialog open={audioDialogOpen} onOpenChange={setAudioDialogOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Call Details & Recording</DialogTitle>
          </DialogHeader>
          {selectedCall && (
            <div className="space-y-6">
              {/* Call Info Card */}
              <div className="rounded-lg bg-secondary p-4">
                <p className="font-medium text-foreground">
                  {selectedCall.lead_name || "Unknown"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {format(
                    new Date(selectedCall.created_at),
                    "MMMM d, yyyy h:mm a"
                  )}
                </p>
                <div className="mt-2 flex items-center gap-4 text-sm flex-wrap">
                  <span className="text-muted-foreground">
                    Duration: {formatDuration(selectedCall.duration_seconds)}
                  </span>
                  <Badge variant={getOutcomeBadgeVariant(selectedCall.outcome)}>
                    {getOutcomeLabel(selectedCall.outcome)}
                  </Badge>
                  <Badge
                    variant={getStatusBadgeVariant(
                      (selectedCall as any).status || "unknown"
                    )}
                  >
                    {getStatusLabel((selectedCall as any).status || "unknown")}
                  </Badge>
                </div>
              </div>

              {/* Audio Player */}
              {selectedCall.recording_url && (
                <div className="rounded-lg border border-border p-4">
                  <h4 className="text-sm font-medium mb-3">Recording</h4>
                  <audio
                    controls
                    className="w-full"
                    src={selectedCall.recording_url}
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}

              {/* AI Summary */}
              {(selectedCall as any).ai_summary && (
                <div className="rounded-lg border border-border p-4">
                  <h4 className="text-sm font-medium mb-2 text-foreground">
                    AI Summary
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {(selectedCall as any).ai_summary}
                  </p>
                </div>
              )}

              {/* Conversation Context */}
              {(selectedCall as any).conversation_context && (
                <div className="rounded-lg border border-border p-4">
                  <h4 className="text-sm font-medium mb-3 text-foreground">
                    Call Analysis
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Sentiment */}
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">
                        Sentiment
                      </p>
                      <Badge
                        variant={
                          (selectedCall as any).conversation_context
                            .sentiment === "positive"
                            ? "default"
                            : (selectedCall as any).conversation_context
                              .sentiment === "negative"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {(
                          (selectedCall as any).conversation_context
                            .sentiment || "unknown"
                        ).toUpperCase()}
                      </Badge>
                    </div>

                    {/* Customer Interests */}
                    {(selectedCall as any).conversation_context
                      .customer_interests &&
                      (selectedCall as any).conversation_context
                        .customer_interests.length > 0 && (
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-2">
                            Interests
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {(
                              selectedCall as any
                            ).conversation_context.customer_interests.map(
                              (interest: string, idx: number) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {interest}
                                </Badge>
                              )
                            )}
                          </div>
                        </div>
                      )}

                    {/* Objections */}
                    {(selectedCall as any).conversation_context
                      .objections_raised &&
                      (selectedCall as any).conversation_context
                        .objections_raised.length > 0 && (
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-2">
                            Objections Raised
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {(
                              selectedCall as any
                            ).conversation_context.objections_raised.map(
                              (obj: string, idx: number) => (
                                <Badge
                                  key={idx}
                                  variant="destructive"
                                  className="text-xs"
                                >
                                  {obj}
                                </Badge>
                              )
                            )}
                          </div>
                        </div>
                      )}

                    {/* Key Topics */}
                    {(selectedCall as any).conversation_context.key_topics &&
                      (selectedCall as any).conversation_context.key_topics
                        .length > 0 && (
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-2">
                            Key Topics
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {(
                              selectedCall as any
                            ).conversation_context.key_topics.map(
                              (topic: string, idx: number) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {topic}
                                </Badge>
                              )
                            )}
                          </div>
                        </div>
                      )}
                  </div>

                  {/* Call Outcome */}
                  {(selectedCall as any).conversation_context.call_outcome && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        Call Outcome
                      </p>
                      <p className="text-sm text-foreground capitalize">
                        {(
                          (selectedCall as any).conversation_context
                            .call_outcome || ""
                        ).replace("_", " ")}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Transcript */}
              {(selectedCall as any).transcript && (
                <div className="rounded-lg border border-border p-4">
                  <h4 className="text-sm font-medium mb-3 text-foreground">
                    Conversation Transcript
                  </h4>
                  <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                    {(() => {
                      try {
                        const transcript =
                          typeof (selectedCall as any).transcript === "string"
                            ? JSON.parse((selectedCall as any).transcript)
                            : (selectedCall as any).transcript;

                        return transcript.map((msg: any, idx: number) => (
                          <div
                            key={idx}
                            className={`flex gap-3 ${msg.role === "assistant"
                              ? "flex-row"
                              : "flex-row-reverse"
                              }`}
                          >
                            <div
                              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${msg.role === "assistant"
                                ? "bg-blue-500 text-white"
                                : "bg-green-500 text-white"
                                }`}
                            >
                              {msg.role === "assistant" ? "AI" : "U"}
                            </div>
                            <div
                              className={`flex-1 rounded-lg p-3 ${msg.role === "assistant"
                                ? "bg-secondary"
                                : "bg-primary/10"
                                }`}
                            >
                              <p className="text-sm text-foreground">
                                {msg.content}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {format(new Date(msg.timestamp), "h:mm:ss a")}
                              </p>
                            </div>
                          </div>
                        ));
                      } catch (e) {
                        return (
                          <p className="text-sm text-muted-foreground">
                            Transcript not available
                          </p>
                        );
                      }
                    })()}
                  </div>
                </div>
              )}

              {/* Cost Breakdown */}
              {/* {(selectedCall as any).cost_breakdown && (
                <div className="rounded-lg border border-border p-4">
                  <h4 className="text-sm font-medium mb-3 text-foreground">
                    Cost Breakdown
                  </h4>
                  <div className="space-y-2">
                    {(selectedCall as any).cost_breakdown.realtime_api && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">
                          Realtime API (
                          {
                            (selectedCall as any).cost_breakdown.realtime_api
                              .tokens
                          }{" "}
                          tokens)
                        </span>
                        <span className="font-mono text-foreground">
                          $
                          {(
                            selectedCall as any
                          ).cost_breakdown.realtime_api.cost.toFixed(6)}
                        </span>
                      </div>
                    )}
                    {(selectedCall as any).cost_breakdown.rag_searches?.count >
                      0 && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">
                          RAG Searches (
                          {
                            (selectedCall as any).cost_breakdown.rag_searches
                              .count
                          }{" "}
                          searches)
                        </span>
                        <span className="font-mono text-foreground">
                          $
                          {(
                            selectedCall as any
                          ).cost_breakdown.rag_searches.cost.toFixed(6)}
                        </span>
                      </div>
                    )}
                    {(selectedCall as any).cost_breakdown.ai_analysis && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">
                          AI Analysis (
                          {
                            (selectedCall as any).cost_breakdown.ai_analysis
                              .tokens
                          }{" "}
                          tokens)
                        </span>
                        <span className="font-mono text-foreground">
                          $
                          {(
                            selectedCall as any
                          ).cost_breakdown.ai_analysis.cost.toFixed(6)}
                        </span>
                      </div>
                    )}
                    {(selectedCall as any).cost_breakdown.ai_summary && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">
                          AI Summary (
                          {
                            (selectedCall as any).cost_breakdown.ai_summary
                              .tokens
                          }{" "}
                          tokens)
                        </span>
                        <span className="font-mono text-foreground">
                          $
                          {(
                            selectedCall as any
                          ).cost_breakdown.ai_summary.cost.toFixed(6)}
                        </span>
                      </div>
                    )}
                    <div className="border-t border-border pt-2 mt-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-foreground">Total Cost</span>
                        <span className="font-mono text-lg text-foreground">
                          $
                          {(
                            selectedCall as any
                          ).cost_breakdown.total_cost.toFixed(6)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
