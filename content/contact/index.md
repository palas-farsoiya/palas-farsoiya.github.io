---
title: Contact
date: 2022-10-24

type: landing

sections:
  - block: contact
    content:
      title: Contact
      text: |-
        
      email: palas.farsoiya@ch.iitr.ac.in
      phone: +91 1332 285382
      address:
        street: B-204 Block B, Chemical Engineering, IIT Roorkee
        city: Roorkee
        region: Uttarakhand
        postcode: '247667'
        country: India
        country_code: India
      coordinates:
        latitude: '29.867503028936714'
        longitude: '77.89364396979045'
      directions: Enter Block-B, the office is above Chemical Engineering Auditorium
      office_hours:
        - 'Monday 10:00 to 13:00'
        - 'Wednesday 09:00 to 10:00'
      appointment_url: 'https://calendly.com/farsoiya'
      #contact_links:
      #  - icon: comments
      #    icon_pack: fas
      #    name: Discuss on Forum
      #    link: 'https://discourse.gohugo.io'
    
      # Automatically link email and phone or display as text?
      autolink: true
    
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: contact.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen
---
