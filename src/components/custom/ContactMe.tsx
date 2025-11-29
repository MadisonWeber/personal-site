import { useState } from 'react';
import { Send, MessageCircleMore } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import emailjs from '@emailjs/browser';
import { Loader } from 'lucide-react';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogTrigger, DialogOverlay } from '@/components/ui/dialog';
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  message: z
    .string()
    .min(3, 'Message must be at least 3 characters long.')
    .max(240, 'Message must be less than 240 characters.'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactMe = () => {
  const [open, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Initialize form
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  });

  const handleSubmitForm = async (data: ContactFormData) => {
    console.log('data is', data);
    try {
      setIsSending(true);
      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_KEY,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        {
          name: data?.email,
          email: data?.email,
          time: new Date().toDateString(),
          message: data?.message,
        },
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      );
      setIsSending(false);
      // setMessage('');
      // setEmail('');
      setIsOpen(false);
      toast.success('Message recieved.');
    } catch {
      toast.error('Failed to send message.');
      setIsSending(false);
    }
  };

  const isDisabled = !form.formState.isValid || isSending;
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitForm)}
            className="flex flex-col w-full items-start justify-start p-8 min-h-80 border-gray-600 rounded-xl bg-white"
          >
            <span className="font-semibold text-xl mb-4">Contact me</span>

            <div className="flex-1 w-full gap-y-2 flex flex-col">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Type your email..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-900 text-xs" />
                  </FormItem>
                )}
              />
              <div />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-md text-gray-600">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-24 resize-none border-gray-300"
                        placeholder="Type your message..."
                        maxLength={240}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-900 text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary-500 text-white mt-8 disabled:bg-gray-400 rounded-lg min-h-10"
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
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactMe;
