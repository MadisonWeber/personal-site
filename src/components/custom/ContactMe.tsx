import React, { useState, type FormEvent } from 'react';
import { Send, MessageCircleMore } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import emailjs from '@emailjs/browser';
import { Loader } from 'lucide-react';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogTrigger, DialogOverlay } from '@/components/ui/dialog';
import { Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidMessage = (message: string) => {
  return message && message.length > 2;
};

const ContactMe = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [open, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSending(true);
      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_KEY,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        {
          name: email,
          email: email,
          time: new Date().toDateString(),
          message: message,
        },
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      );
      setIsSending(false);
      setMessage('');
      setEmail('');
      setIsOpen(false);
      toast.success('Message recieved.');
    } catch {
      toast.error('Failed to send message.');
      setIsSending(false);
    }
  };

  const isDisabled = !isValidEmail(email) || !isValidMessage(message) || isSending;

  return (
    <Dialog
      open={open}
      onOpenChange={setIsOpen}
    >
      <DialogOverlay className="bg-black/40" />
      <DialogTrigger asChild>
        <Button className="flex flex-row items-center justify-center bg-white p-5 rounded-full cursor-pointer shadow-lg hover:bg-blue-50">
          <MessageCircleMore
            height={10}
            width={10}
            className="text-sky-900 animate-pulse"
            onClick={() => setIsOpen(true)}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 shadow-xl rounded-xl [&>button]:hidden">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full items-start justify-start p-8 min-h-80 border-gray-600 rounded-xl bg-white"
        >
          <span className="font-semibold text-xl mb-4">Contact me</span>
          {/* <div className="w-full h-px bg-gray-200 mt-2 mb-4" /> */}
          <div className="flex-1 w-full gap-y-2 flex flex-col">
            <Label
              htmlFor="email"
              className="text-sm font-md text-gray-600"
            >
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Type your email..."
              className="border-gray-300"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div />
            <Label
              htmlFor="message"
              className="text-sm font-md text-gray-600"
            >
              Message
            </Label>
            <Textarea
              className="min-h-24 resize-none"
              id="message"
              placeholder="Type your message..."
              maxLength={240}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary-500 text-white mt-4 disabled:bg-gray-400"
            disabled={isDisabled}
          >
            {isSending ? (
              <Loader
                height={12}
                width={12}
                className="animate-spin"
              />
            ) : (
              <>
                Send Message
                <Send
                  height={10}
                  width={10}
                />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactMe;
