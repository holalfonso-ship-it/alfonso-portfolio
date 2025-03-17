import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import { SendIcon, Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'Email',
    value: 'holalfonso@gamil.com',
    link: 'mailto:holalfonso@gamil.com'
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: 'Phone',
    value: '+34 678 815 239',
    link: 'tel:+34678815239'
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: 'Location',
    value: 'Barcelona, Spain',
    link: 'https://maps.google.com/?q=Barcelona,+Spain'
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      toast.success('Message sent successfully!');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/10 text-primary">
            Get In Touch
          </span>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            <AnimatedText text="Let's Work Together" className="inline-block" once />
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-display font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a 
                    key={item.label}
                    href={item.link}
                    className="flex items-start space-x-4 group transition-colors hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-display font-bold mb-4">Follow Me</h3>
              <p className="text-muted-foreground mb-4">
                Connect with me on social media to see my latest works and design insights.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Dribbble"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12c-6.628 0-12 5.373-12 12s5.372 12 12 12zm0-24c6.627 0 12 5.373 12 12s-5.373 12-12 12c-6.628 0-12-5.373-12-12s5.372-12 12-12z"></path>
                    <path d="M19.989 11.572c-.062-.187-.122-.36-.185-.535-.391-1.104-.892-2.145-1.492-3.129-.46-.747-.981-1.463-1.571-2.114-.339-.376-.699-.726-1.069-1.068-.764-.689-1.591-1.376-2.485-1.903-.434-.256-.88-.486-1.334-.71-.151-.074-.303-.153-.458-.221-.293-.131-.591-.242-.89-.345-.052-.018-.101-.039-.152-.056-.494-.167-.996-.279-1.509-.364-.311-.051-.627-.083-.943-.113-.119-.012-.24-.018-.36-.023-.481-.021-.961-.017-1.444.006l-.237.018c-.973.086-1.933.296-2.847.632-.076.028-.15.059-.226.089-.421.171-.835.35-1.238.547-.407.2-.806.407-1.194.635l-.324.101c-.457.278-.902.57-1.334.881-.223.162-.445.313-.659.486-.306.232-.604.473-.898.72-.038.031-.08.058-.117.09-.34.295-.678.598-.999.913-.24.234-.459.485-.698.727-.172.177-.342.35-.511.532-.28.301-.556.588-.814.901-.259.313-.513.632-.757.954-.311.42-.601.851-.878 1.294-.129.202-.277.396-.4.604-.16.262-.31.528-.455.802-.65.124-.128.246-.196.371-.159.292-.313.585-.459.883-.128.263-.242.537-.36.806-.055.118-.122.228-.172.349-.201.483-.374.975-.522 1.476-.134.447-.249.894-.344 1.349l-.124.06c-.046.231-.085.465-.122.698-.012.06-.029.118-.04.178-.087.518-.143 1.041-.182 1.566-.005.062-.018.123-.022.185-.023.365-.04.733-.04 1.103 0 .119.005.235.007.354.003.275.018.549.037.824.005.067.013.133.018.199.037.38.09.758.153 1.133.013.071.02.143.033.214.09.532.208 1.056.347 1.574.098.364.208.723.324 1.079.039.117.074.233.113.349.152.455.327.903.514 1.345.169.396.35.784.539 1.169.024.049.043.098.067.146.258.51.54 1.009.844 1.493.033.053.064.106.097.157.297.458.615.905.948 1.338.103.134.205.268.31.401.183.232.378.448.571.674.102.118.201.237.305.355.36.408.375.463.584.658.022.021.036.043.058.063.29.296.604.572.919.841.139.119.277.237.418.352.169.139.343.276.517.408.103.08.203.164.308.241.045.034.094.063.14.096.401.289.814.563 1.236.825.095.059.191.116.288.173.238.14.479.277.722.409.112.06.224.117.336.175.243.124.484.246.731.36.078.037.16.064.239.1.462.2.931.384 1.408.543.141.048.287.085.43.128.283.09.566.173.853.249.123.033.246.063.37.094.4.098.8.187 1.206.269.051.01.104.014.155.023.337.064.676.119 1.016.167.166.024.33.054.498.074.119.015.238.021.358.035.336.039.675.063 1.014.087.092.005.182.016.274.021.521.027 1.044.039 1.57.039.517 0 1.041-.012 1.557-.037.119-.007.23-.021.349-.021.121-.017.245-.024.367-.041.336-.046.675-.101 1.011-.161.156-.028.31-.063.466-.095.17-.033.342-.063.512-.101.396-.086.795-.18 1.185-.291.061-.016.117-.036.178-.052.273-.079.546-.163.814-.25.151-.048.303-.097.453-.149.153-.052.303-.114.455-.169.28-.102.56-.205.836-.317.161-.065.32-.134.479-.204.277-.12.553-.243.825-.375.167-.081.33-.169.493-.255.065-.034.134-.063.201-.098.376-.207.744-.423 1.102-.65.106-.066.206-.134.31-.203.212-.133.424-.268.63-.408.118-.08.234-.16.35-.242.36-.255.713-.522 1.056-.801l.119-.104c.202-.171.406-.345.602-.524.116-.104.219-.219.332-.325.201-.19.412-.366.61-.564.43-.428.838-.876 1.219-1.345.105-.129.211-.257.315-.389.231-.295.454-.597.671-.901.053-.072.108-.145.161-.22.233-.326.455-.656.67-.992.062-.097.128-.19.188-.289.164-.269.32-.544.474-.823.049-.089.1-.177.148-.266.25-.477.484-.964.7-1.462.054-.124.101-.254.153-.38.169-.41.333-.82.483-1.241.028-.078.049-.16.076-.238.173-.499.331-.999.478-1.507.036-.124.075-.246.108-.37.182-.68.34-1.368.472-2.068.026-.122.041-.247.064-.37.097-.527.183-1.061.244-1.598.039-.341.066-.686.09-1.032.01-.166.027-.33.035-.498.035-.767.05-1.538.025-2.307-.006-.2-.02-.396-.031-.595-.023-.412-.057-.822-.099-1.233-.005-.052-.006-.106-.012-.158-.04-.381-.096-.759-.151-1.138-.024-.155-.043-.313-.069-.467-.074-.432-.161-.86-.256-1.287-.017-.076-.028-.155-.046-.232-.103-.458-.223-.912-.353-1.362-.03-.102-.061-.202-.092-.304-.14-.46-.296-.914-.462-1.363-.018-.05-.033-.102-.051-.152-.152-.408-.326-.809-.502-1.208-.061-.138-.122-.277-.185-.415-.168-.368-.343-.734-.525-1.095-.062-.124-.123-.248-.186-.37-.137-.26-.274-.52-.418-.776-.066-.117-.138-.229-.205-.345-.015-.026-.025-.054-.04-.08l.002-.004c-1.661-2.651-3.88-4.916-6.4-6.644-.207-.142-.42-.275-.63-.41-.137-.088-.272-.179-.41-.264-.23-.142-.464-.27-.7-.406-.12-.07-.235-.143-.357-.21-.26-.146-.523-.289-.79-.422-.114-.058-.227-.113-.342-.168-.287-.136-.578-.262-.873-.384-.12-.051-.242-.099-.363-.146-.301-.118-.606-.221-.912-.324-.096-.033-.193-.063-.291-.094-.385-.122-.774-.23-1.167-.329-.066-.015-.124-.037-.189-.052l.006-.003c-.474-.121-.952-.209-1.436-.295-.168-.03-.34-.051-.51-.077-.307-.047-.616-.086-.925-.119-.181-.02-.361-.043-.543-.058-.328-.027-.657-.042-.987-.059-.138-.007-.276-.021-.414-.025-.349-.013-.698-.019-1.049-.019s-.7.006-1.048.018c-.143.004-.284.019-.427.026-.323.017-.646.032-.968.058-.187.015-.371.038-.557.059-.3.031-.599.068-.896.112-.175.026-.347.048-.521.079-.472.083-.94.168-1.404.284z"></path>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <SendIcon className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
