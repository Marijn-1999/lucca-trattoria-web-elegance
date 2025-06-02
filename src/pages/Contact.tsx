
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Sent!",
      description: "We'll contact you within 24 hours to confirm your reservation.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-warm-800 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Contattaci
            </h1>
            <p className="text-xl text-warm-200">
              We'd love to welcome you to our family table
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-warm-800 mb-8">
                  Visit Us
                </h2>
                
                <div className="space-y-6 mb-8">
                  <Card className="bg-white border-warm-200">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-warm-600 mt-1 mr-4" />
                        <div>
                          <h3 className="font-semibold text-warm-800 mb-2">Location</h3>
                          <p className="text-warm-600">
                            123 Italian Way<br />
                            Downtown City, ST 12345<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-warm-200">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Clock className="h-6 w-6 text-warm-600 mt-1 mr-4" />
                        <div>
                          <h3 className="font-semibold text-warm-800 mb-2">Hours</h3>
                          <div className="text-warm-600 space-y-1">
                            <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                            <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                            <p>Sunday: 4:00 PM - 9:00 PM</p>
                            <p className="text-sm text-warm-500 mt-2">Closed on major holidays</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-warm-200">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Calendar className="h-6 w-6 text-warm-600 mt-1 mr-4" />
                        <div>
                          <h3 className="font-semibold text-warm-800 mb-2">Contact Info</h3>
                          <div className="text-warm-600 space-y-1">
                            <p>Phone: (555) 123-4567</p>
                            <p>Email: info@luccatrattoria.com</p>
                            <p className="text-sm text-warm-500 mt-2">
                              For large parties (8+), please call directly
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-sage-700 text-white p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3">Private Events</h3>
                  <p className="text-sage-200 mb-3">
                    Looking to host a special celebration? We offer private dining experiences 
                    for birthdays, anniversaries, corporate events, and more.
                  </p>
                  <p className="text-sage-200 text-sm">
                    Contact us to discuss your event needs and custom menu options.
                  </p>
                </div>
              </div>

              {/* Reservation Form */}
              <div>
                <Card className="bg-white border-warm-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl text-warm-800">
                      Make a Reservation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="border-warm-300 focus:border-warm-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border-warm-300 focus:border-warm-500"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-warm-300 focus:border-warm-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="date">Date *</Label>
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            required
                            value={formData.date}
                            onChange={handleInputChange}
                            className="border-warm-300 focus:border-warm-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="time">Time *</Label>
                          <Input
                            id="time"
                            name="time"
                            type="time"
                            required
                            value={formData.time}
                            onChange={handleInputChange}
                            className="border-warm-300 focus:border-warm-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="guests">Guests *</Label>
                          <Input
                            id="guests"
                            name="guests"
                            type="number"
                            min="1"
                            max="20"
                            required
                            value={formData.guests}
                            onChange={handleInputChange}
                            className="border-warm-300 focus:border-warm-500"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Special Requests</Label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-warm-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-500 focus:border-warm-500"
                          placeholder="Dietary restrictions, special occasions, seating preferences..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-warm-600 hover:bg-warm-700 text-white"
                      >
                        Send Reservation Request
                      </Button>

                      <p className="text-sm text-warm-500 text-center">
                        * Required fields. We'll confirm your reservation within 24 hours.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
