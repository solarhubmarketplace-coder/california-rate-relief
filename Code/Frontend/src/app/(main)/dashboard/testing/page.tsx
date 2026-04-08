"use client";

import React, { useState } from "react";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Loader2,
  Info,
} from "lucide-react";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

interface TestResult {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

export default function TestingPage() {
  // Phone for Call
  const [callPhone, setCallPhone] = useState("");
  const [callLoading, setCallLoading] = useState(false);
  const [callResult, setCallResult] = useState<TestResult | null>(null);

  // Phone for SMS
  const [smsPhone, setSmsPhone] = useState("");
  const [smsLoading, setSmsLoading] = useState(false);
  const [smsResult, setSmsResult] = useState<TestResult | null>(null);

  // Email for Email
  const [email, setEmail] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailResult, setEmailResult] = useState<TestResult | null>(null);

  // System Status
  const [statusData, setStatusData] = useState<any>(null);
  const [statusLoading, setStatusLoading] = useState(false);

  // Test Call
  const handleTestCall = async () => {
    if (!callPhone.trim()) {
      setCallResult({
        success: false,
        message: "Phone number is required",
        error: "Please enter a phone number",
      });
      return;
    }

    setCallLoading(true);
    setCallResult(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/test/call`, {
        phoneNumber: callPhone,
      });

      setCallResult({
        success: true,
        message: response.data.message,
        data: response.data.data,
      });
    } catch (error: any) {
      setCallResult({
        success: false,
        message: "Failed to initiate call",
        error: error.response?.data?.error || error.message,
      });
    } finally {
      setCallLoading(false);
    }
  };

  // Test SMS
  const handleTestSms = async () => {
    if (!smsPhone.trim()) {
      setSmsResult({
        success: false,
        message: "Phone number is required",
        error: "Please enter a phone number",
      });
      return;
    }

    setSmsLoading(true);
    setSmsResult(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/test/sms`, {
        phoneNumber: smsPhone,
      });

      setSmsResult({
        success: true,
        message: response.data.message,
        data: response.data.data,
      });
    } catch (error: any) {
      setSmsResult({
        success: false,
        message: "Failed to send SMS",
        error: error.response?.data?.error || error.message,
      });
    } finally {
      setSmsLoading(false);
    }
  };

  // Test Email
  const handleTestEmail = async () => {
    if (!email.trim()) {
      setEmailResult({
        success: false,
        message: "Email address is required",
        error: "Please enter an email address",
      });
      return;
    }

    setEmailLoading(true);
    setEmailResult(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/test/email`, {
        email: email,
      });

      setEmailResult({
        success: true,
        message: response.data.message,
        data: response.data.data,
      });
    } catch (error: any) {
      setEmailResult({
        success: false,
        message: "Failed to send email",
        error: error.response?.data?.error || error.message,
      });
    } finally {
      setEmailLoading(false);
    }
  };

  // Get System Status
  const handleGetStatus = async () => {
    setStatusLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/test/status`);
      setStatusData(response.data.data);
    } catch (error: any) {
      console.error("Failed to get status:", error);
    } finally {
      setStatusLoading(false);
    }
  };

  // Load status on mount
  React.useEffect(() => {
    handleGetStatus();
  }, []);

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="container mx-auto p-6 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">System Testing</h1>
            <p className="text-muted-foreground">
              Test Voice Call, SMS, and Email functionality manually
            </p>
          </div>

          {/* System Status Card */}
          <Card className="mb-6 border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                System Status
              </CardTitle>
              <CardDescription>
                Current configuration and service status
              </CardDescription>
            </CardHeader>
            <CardContent>
              {statusLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Loading status...</span>
                </div>
              ) : statusData ? (
                <div className="grid gap-4 md:grid-cols-3">
                  {/* Call Status */}
                  <div className="p-4 rounded-lg bg-white border">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Voice Call
                    </h3>
                    <div className="space-y-1 text-sm">
                      <p
                        className={
                          statusData.services?.call?.configured
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {statusData.services?.call?.configured
                          ? "✓ Configured"
                          : "✗ Not Configured"}
                      </p>
                      <p className="text-muted-foreground">
                        Phone: {statusData.services?.call?.twilioPhoneNumber}
                      </p>
                    </div>
                  </div>

                  {/* SMS Status */}
                  <div className="p-4 rounded-lg bg-white border">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      SMS
                    </h3>
                    <div className="space-y-1 text-sm">
                      <p
                        className={
                          statusData.services?.sms?.configured
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {statusData.services?.sms?.configured
                          ? "✓ Configured"
                          : "✗ Not Configured"}
                      </p>
                      <p className="text-muted-foreground">
                        Phone: {statusData.services?.sms?.twilioPhoneNumber}
                      </p>
                    </div>
                  </div>

                  {/* Email Status */}
                  <div className="p-4 rounded-lg bg-white border">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </h3>
                    <div className="space-y-1 text-sm">
                      <p
                        className={
                          statusData.services?.email?.configured
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {statusData.services?.email?.configured
                          ? "✓ Configured"
                          : "✗ Not Configured"}
                      </p>
                      <p className="text-muted-foreground">
                        From: {statusData.services?.email?.emailFrom}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground">Failed to load status</p>
              )}
            </CardContent>
          </Card>

          {/* Pricing Information Card */}
          <Card className="mb-6 border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Current API Pricing
              </CardTitle>
              <CardDescription>
                OpenAI API costs per test (based on gpt-4o-mini model)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {/* Voice Call Pricing */}
                <div className="p-4 rounded-lg bg-white border">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Voice Call
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Realtime API:</span>
                      <span className="font-mono">$0.015/1K tokens</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">RAG Search:</span>
                      <span className="font-mono">$0.00015/1K tokens</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">AI Analysis:</span>
                      <span className="font-mono">$0.00015/1K tokens</span>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex justify-between font-semibold">
                        <span>Est. per call:</span>
                        <span className="text-green-600">~$0.05-0.15</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SMS Pricing */}
                <div className="p-4 rounded-lg bg-white border">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    SMS
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Twilio SMS:</span>
                      <span className="font-mono">~$0.0075/msg</span>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex justify-between font-semibold">
                        <span>Per message:</span>
                        <span className="text-green-600">~$0.01</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Pricing */}
                <div className="p-4 rounded-lg bg-white border">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Resend API:</span>
                      <span className="font-mono">Free tier</span>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex justify-between font-semibold">
                        <span>Per email:</span>
                        <span className="text-green-600">$0.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-200">
                <p className="text-xs text-blue-800">
                  <strong>Note:</strong> Actual costs may vary based on conversation length, RAG searches performed, and token usage. The estimates above are based on typical 2-3 minute calls.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Test Call Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Test Voice Call
                </CardTitle>
                <CardDescription>
                  Trigger a test call to any phone number
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="callPhone">Phone Number</Label>
                  <Input
                    id="callPhone"
                    type="tel"
                    placeholder="+1234567890"
                    value={callPhone}
                    onChange={(e) => setCallPhone(e.target.value)}
                    disabled={callLoading}
                  />
                  <p className="text-xs text-muted-foreground">
                    Use E.164 format (e.g., +1234567890)
                  </p>
                </div>

                <Button
                  onClick={handleTestCall}
                  disabled={callLoading || !callPhone.trim()}
                  className="w-full"
                >
                  {callLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Initiating Call...
                    </>
                  ) : (
                    <>
                      <Phone className="mr-2 h-4 w-4" />
                      Trigger Call
                    </>
                  )}
                </Button>

                {callResult && (
                  <Alert
                    variant={callResult.success ? "default" : "destructive"}
                  >
                    {callResult.success ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <XCircle className="h-4 w-4" />
                    )}
                    <AlertTitle>
                      {callResult.success ? "Success" : "Error"}
                    </AlertTitle>
                    <AlertDescription>
                      <p>{callResult.message}</p>
                      {callResult.error && (
                        <p className="mt-1 text-sm">{callResult.error}</p>
                      )}
                      {callResult.data?.callSid && (
                        <p className="mt-2 text-xs font-mono">
                          SID: {callResult.data.callSid}
                        </p>
                      )}
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Test SMS Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Test SMS
                </CardTitle>
                <CardDescription>
                  Send a test SMS to any phone number
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="smsPhone">Phone Number</Label>
                  <Input
                    id="smsPhone"
                    type="tel"
                    placeholder="+1234567890"
                    value={smsPhone}
                    onChange={(e) => setSmsPhone(e.target.value)}
                    disabled={smsLoading}
                  />
                  <p className="text-xs text-muted-foreground">
                    Use E.164 format (e.g., +1234567890)
                  </p>
                </div>

                <Button
                  onClick={handleTestSms}
                  disabled={smsLoading || !smsPhone.trim()}
                  className="w-full"
                >
                  {smsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending SMS...
                    </>
                  ) : (
                    <>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send SMS
                    </>
                  )}
                </Button>

                {smsResult && (
                  <Alert
                    variant={smsResult.success ? "default" : "destructive"}
                  >
                    {smsResult.success ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <XCircle className="h-4 w-4" />
                    )}
                    <AlertTitle>
                      {smsResult.success ? "Success" : "Error"}
                    </AlertTitle>
                    <AlertDescription>
                      <p>{smsResult.message}</p>
                      {smsResult.error && (
                        <p className="mt-1 text-sm">{smsResult.error}</p>
                      )}
                      {smsResult.data?.messageSid && (
                        <p className="mt-2 text-xs font-mono">
                          SID: {smsResult.data.messageSid}
                        </p>
                      )}
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Test Email Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Test Email
                </CardTitle>
                <CardDescription>
                  Send a test email to any address
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="test@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={emailLoading}
                  />
                  <p className="text-xs text-muted-foreground">
                    Check spam folder if not received
                  </p>
                </div>

                <Button
                  onClick={handleTestEmail}
                  disabled={emailLoading || !email.trim()}
                  className="w-full"
                >
                  {emailLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Email...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </>
                  )}
                </Button>

                {emailResult && (
                  <Alert
                    variant={emailResult.success ? "default" : "destructive"}
                  >
                    {emailResult.success ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <XCircle className="h-4 w-4" />
                    )}
                    <AlertTitle>
                      {emailResult.success ? "Success" : "Error"}
                    </AlertTitle>
                    <AlertDescription>
                      <p>{emailResult.message}</p>
                      {emailResult.error && (
                        <p className="mt-1 text-sm">{emailResult.error}</p>
                      )}
                      {emailResult.data?.emailId && (
                        <p className="mt-2 text-xs font-mono">
                          ID: {emailResult.data.emailId}
                        </p>
                      )}
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <Card className="mt-6 border-amber-200 bg-amber-50/50">
            <CardHeader>
              <CardTitle>Testing Instructions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Voice Call Testing:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Enter your phone number in E.164 format (e.g., +1234567890)
                  </li>
                  <li>Click &quot;Trigger Call&quot; to initiate the test call</li>
                  <li>You should receive a call within 5-10 seconds</li>
                  <li>
                    The AI assistant will greet you and engage in conversation
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">SMS Testing:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Enter your phone number in E.164 format</li>
                  <li>Click &quot;Send SMS&quot; to send the test message</li>
                  <li>You should receive the SMS within seconds</li>
                  <li>Check that the message content is correct</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email Testing:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Enter your email address</li>
                  <li>Click &quot;Send Email&quot; to send the test email</li>
                  <li>Check your inbox (and spam folder)</li>
                  <li>Verify that HTML formatting is rendered correctly</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
