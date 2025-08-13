import { Component } from '@angular/core';

@Component({
  selector: 'app-servicecard',
  imports: [],
  templateUrl: './servicecard.html',
  styleUrl: './servicecard.css'
})
export class Servicecard {
services = [{
    "service": "E-Commerce Stores",
    "icon":"&#x1F6CD;&#xFE0F;",
    "description":"Sell products online with a professional, user-friendly store. From product pages to secure checkout, I create fully functional shops that are easy to manage and designed to increase sales."
  },{
    "service": "Personal Portfolios",
    "icon":"&#x1F469;&#x200D;&#x1F4BB;",
    "description":"Showcase your work, skills, and achievements with a clean and modern portfolio. Perfect for creatives, freelancers, and professionals who want to stand out online."
  },{
    "service":"Service-Based",
    "icon":"&#x1F527;",
    "description":"Websites for businesses like salons, plumbers, landscapers, consultants, and more — including booking forms, service descriptions, and contact options to attract new clients."
  },{
    "service":"Blogs & Content",
    "icon": "&#x270F;&#xFE0F;",
    "description":"Share your ideas, articles, and resources with a beautifully designed blog that’s easy to update and optimized for readers."
  },{
    "service":"Restaurant & Food Service",
    "icon": "&#x1F355;",
    "description":"Menu displays, online ordering, reservations, and location info — everything your customers need to find and enjoy your food."
  },{
    "service":"Event & Wedding Websites",
    "icon": "&#x1F492;",
    "description":"Elegant, informative sites for weddings, conferences, or special events — with RSVP forms, schedules, maps, and galleries."
  },{
    "service":"Non-Profit & Community",
    "icon": "&#x1F497;",
    "description":"Help your cause stand out with a website that tells your story, accepts donations, and engages supporters."
  },{
    "service":"Real Estate & Property",
    "icon": "&#x1F3E0;",
    "description":"Showcase properties with stunning images, detailed descriptions, and inquiry forms to connect buyers and sellers."
  },{
    "service":"Educational & Course",
    "icon": "&#x1F4DA;",
    "description":"Platforms for online learning — from course listings and lesson pages to payment integration for selling classes."
  },{
    "service":"Landing Pages",
    "icon": "&#x1F680;",
    "description":"High-converting single-page sites for promoting products, services, or campaigns with clear calls-to-action."
  },{
    "service":"Healthcare & Wellness",
    "icon": "&#x1F48A;",
    "description":"Professional sites for doctors, therapists, fitness coaches, and wellness centers — with service details, appointment booking, and patient resources."
  },{
    "service":"Membership & Community",
    "icon": "&#x1F5E3;&#xFE0F;",
    "description":"Build an engaged audience with exclusive content, member profiles, and forums — perfect for clubs, online communities, and subscription-based platforms."
  }];
}
