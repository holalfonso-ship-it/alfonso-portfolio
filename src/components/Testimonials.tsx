import React from 'react';

const testimonials = [
    {
        name: "John Doe",
        feedback: "This is a fantastic product! Highly recommend it!",
        image: "path_to_john_image"
    },
    {
        name: "Jane Smith",
        feedback: "Excellent service and support. Very satisfied!",
        image: "path_to_jane_image"
    },
    {
        name: "Emily Johnson",
        feedback: "A game changer in my workflow. Can't imagine life without it!",
        image: "path_to_emily_image"
    }
];

const Testimonials = () => {
    return (
        <div>
            <h2>Testimonials</h2>
            <ul>
                {testimonials.map((testimonial, index) => (
                    <li key={index}>
                        <img src={testimonial.image} alt={testimonial.name} />
                        <p><strong>{testimonial.name}</strong></p>
                        <p>{testimonial.feedback}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Testimonials;