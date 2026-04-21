import type { LegalSection } from "./privacy";

export const termsSections: LegalSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    blocks: [
      {
        type: "paragraph",
        text: 'By downloading, installing, or using TranZfort ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our App.',
      },
      {
        type: "paragraph",
        text: 'These Terms constitute a legally binding agreement between you and TranZfort Logistics Technologies Pvt Ltd ("TranZfort", "Company", "we", "us", "our").',
      },
      {
        type: "callout",
        text: "CRITICAL ACKNOWLEDGMENT: You expressly acknowledge and agree that: (1) TranZfort is a technology platform providing a digital marketplace ONLY, (2) We are NOT a transportation company, logistics provider, freight forwarder, common carrier, or shipping company, (3) We do not own, operate, or control any vehicles or transportation equipment, (4) We do not employ, supervise, or manage any truckers, drivers, or transportation providers, (5) We do not handle, transport, store, or take custody of any cargo or goods, (6) All transportation services are provided by independent third-party truckers, (7) All shipping needs are posted by independent third-party suppliers, (8) TranZfort merely facilitates connections between these independent parties.",
      },
      {
        type: "subheading",
        text: "1.1 Modifications",
      },
      {
        type: "paragraph",
        text: "We reserve the right to modify these Terms at any time. Continued use of the App after modifications constitutes acceptance of the updated Terms.",
      },
      {
        type: "subheading",
        text: "1.2 Language",
      },
      {
        type: "paragraph",
        text: "These Terms are provided in English. Any translations are provided for convenience only, and the English version prevails in case of conflict.",
      },
    ],
  },
  {
    id: "description-of-service",
    title: "2. Description of Service",
    blocks: [
      {
        type: "paragraph",
        text: "TranZfort operates a technology platform that serves as a digital marketplace connecting:",
      },
      {
        type: "bullets",
        items: [
          "Suppliers (Shippers): Independent third-party businesses or individuals who need to transport goods",
          "Truckers (Transporters): Independent third-party vehicle owners or operators who provide transportation services",
        ],
      },
      {
        type: "paragraph",
        text: "PLATFORM NATURE: TranZfort is strictly a neutral intermediary platform. We do not participate in, control, supervise, or become involved in the actual transportation transactions between suppliers and truckers. All agreements, contracts, and arrangements for transportation services are made directly between the supplier and trucker. TranZfort is not a party to any transportation agreement.",
      },
      {
        type: "subheading",
        text: "2.1 Core Platform Features",
      },
      {
        type: "bullets",
        intro: "For Suppliers:",
        items: [
          "Post loads with detailed information (origin, destination, cargo, rates)",
          "Browse and view trucker profiles, ratings, and reviews",
          "Communicate with truckers through in-app chat",
          "Request bookings from truckers",
          "Track trip status updates provided by truckers",
          "Access dispute resolution tools",
        ],
      },
      {
        type: "bullets",
        intro: "For Truckers:",
        items: [
          "Browse available loads based on location, route, and rates",
          "View supplier profiles, ratings, and reviews",
          "Accept or decline booking requests from suppliers",
          "Update trip status for visibility to suppliers",
          "Communicate with suppliers through in-app chat",
          "Manage fleet and vehicle information in profile",
          "Build reputation through reviews and ratings",
        ],
      },
      {
        type: "bullets",
        intro: "For Both:",
        items: [
          "Create and manage profiles",
          "Complete verification process",
          "Leave and receive reviews and ratings",
          "Access platform support",
          "Report issues and disputes",
        ],
      },
      {
        type: "paragraph",
        text: 'IMPORTANT LIMITATION: The "tracking" feature available on our platform displays status updates voluntarily provided by the trucker. TranZfort does not independently verify the location or status of any vehicle, cargo, or driver. Real-time GPS tracking is only available if the trucker chooses to share their location through the platform.',
      },
      {
        type: "subheading",
        text: "2.2 No Endorsement, Verification, or Guarantee",
      },
      {
        type: "callout",
        text: "YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT: TranZfort does NOT endorse, recommend, verify, screen, or guarantee: the accuracy, completeness, or truthfulness of any user profile information; the validity of verification documents uploaded by users; the quality, safety, or legality of any transportation services; the condition, safety, or roadworthiness of any vehicle or equipment; the financial stability, creditworthiness, or payment ability of any user; the completion, fulfillment, or satisfactory performance of any transaction; the identity, credentials, qualifications, or reliability of any user; the compliance of any user with applicable laws, regulations, or permits.",
      },
      {
        type: "callout",
        text: "ALL USERS ARE SOLELY RESPONSIBLE FOR: Conducting their own due diligence on counterparties; Verifying the identity, credentials, licenses, and insurance of counterparties; Assessing the reliability and suitability of counterparties; Negotiating and agreeing upon all terms of transportation services; Ensuring compliance with all applicable laws and regulations; Obtaining appropriate insurance coverage for their activities.",
      },
    ],
  },
  {
    id: "user-accounts",
    title: "3. User Accounts",
    blocks: [
      {
        type: "subheading",
        text: "3.1 Eligibility",
      },
      {
        type: "paragraph",
        text: "To use TranZfort, you must:",
      },
      {
        type: "bullets",
        items: [
          "Be at least 18 years of age",
          "Have the legal capacity to enter into these Terms",
          "Not be prohibited from using the service under applicable laws",
        ],
      },
      {
        type: "subheading",
        text: "3.2 Account Registration",
      },
      {
        type: "paragraph",
        text: "To create an account, you must:",
      },
      {
        type: "bullets",
        items: [
          "Provide accurate, current, and complete information",
          "Choose a secure password and keep it confidential",
          "Provide a valid email address and phone number",
          "Agree to these Terms of Service and Privacy Policy",
        ],
      },
      {
        type: "subheading",
        text: "3.3 Account Security",
      },
      {
        type: "paragraph",
        text: "You are responsible for:",
      },
      {
        type: "bullets",
        items: [
          "Maintaining the confidentiality of your account credentials",
          "All activities that occur under your account",
          "Notifying us immediately if you suspect unauthorized access",
          "Using a strong and unique password",
        ],
      },
      {
        type: "subheading",
        text: "3.4 One Account Per Person",
      },
      {
        type: "paragraph",
        text: "Each person or business may maintain only one account. Creating multiple accounts is prohibited and may result in account suspension.",
      },
      {
        type: "subheading",
        text: "3.5 Account Verification",
      },
      {
        type: "paragraph",
        text: "We may require you to verify your identity or business information before certain features are enabled:",
      },
      {
        type: "bullets",
        items: [
          "Personal verification using Aadhaar",
          "Business verification using PAN, GST, business license",
          "Vehicle verification using RC and driving license",
          "Verification status affects your ability to use certain features",
        ],
      },
    ],
  },
  {
    id: "user-responsibilities",
    title: "4. User Responsibilities",
    blocks: [
      {
        type: "subheading",
        text: "4.1 Supplier Responsibilities",
      },
      {
        type: "paragraph",
        text: "As a Supplier, you agree to:",
      },
      {
        type: "bullets",
        intro: "Load Posting:",
        items: [
          "Provide accurate and complete information for all loads you post",
          "Include correct origin and destination locations",
          "Specify accurate cargo details (weight, type, special requirements)",
          "Set realistic rates that reflect market conditions",
          "Update or remove loads when they are no longer available",
        ],
      },
      {
        type: "bullets",
        intro: "Booking Fulfillment:",
        items: [
          "Honor booking requests you accept",
          "Ensure cargo is ready for pickup at the scheduled time",
          "Provide accurate pickup and delivery instructions",
          "Pay truckers according to agreed-upon rates",
          "Communicate delays or issues proactively",
        ],
      },
      {
        type: "bullets",
        intro: "Professional Conduct:",
        items: [
          "Communicate professionally with truckers",
          "Respond to booking requests in a timely manner",
          "Provide accurate information throughout the booking process",
        ],
      },
      {
        type: "subheading",
        text: "4.2 Trucker Responsibilities",
      },
      {
        type: "paragraph",
        text: "As a Trucker, you agree to:",
      },
      {
        type: "bullets",
        intro: "Vehicle Maintenance:",
        items: [
          "Maintain your vehicle in good working condition",
          "Ensure all required documentation is valid and up-to-date",
          "Comply with all applicable transportation regulations",
          "Provide accurate vehicle information in your profile",
        ],
      },
      {
        type: "bullets",
        intro: "Trip Fulfillment:",
        items: [
          "Accept bookings in good faith with intention to fulfill",
          "Arrive at pickup location on time",
          "Handle cargo with care and deliver it safely",
          "Follow specified routes unless agreed otherwise",
          "Communicate delays or issues proactively",
        ],
      },
      {
        type: "bullets",
        intro: "Professional Conduct:",
        items: [
          "Communicate professionally with suppliers",
          "Provide accurate status updates during trips",
          "Deliver goods in the condition they were received",
        ],
      },
      {
        type: "subheading",
        text: "4.3 General Responsibilities (All Users)",
      },
      {
        type: "paragraph",
        text: "You agree to:",
      },
      {
        type: "bullets",
        intro: "Accurate Information:",
        items: [
          "Provide accurate, truthful, and complete information in your profile",
          "Keep your verification documents up to date and valid",
          "Update your profile promptly if circumstances change",
          "You are solely responsible for the accuracy of information you provide",
        ],
      },
      {
        type: "bullets",
        intro: "Professional Communication:",
        items: [
          "Communicate respectfully with other users",
          "Not use abusive, harassing, or offensive language",
          "Not share inappropriate content",
        ],
      },
      {
        type: "bullets",
        intro: "Compliance:",
        items: [
          "Comply with all applicable laws and regulations",
          "Not use the App for illegal activities",
          "Not attempt to circumvent our security measures",
        ],
      },
    ],
  },
  {
    id: "verification",
    title: "5. Verification Process",
    blocks: [
      {
        type: "subheading",
        text: "5.1 Purpose",
      },
      {
        type: "paragraph",
        text: "Our verification process is designed to:",
      },
      {
        type: "bullets",
        items: [
          "Build trust between users",
          "Reduce fraud and ensure platform integrity",
          "Enable users to make informed decisions",
        ],
      },
      {
        type: "subheading",
        text: "5.2 Verification Types",
      },
      {
        type: "bullets",
        intro: "Personal Verification:",
        items: [
          "Aadhaar number verification (for identity)",
          "PAN number verification (for business users)",
          "Mobile number verification",
        ],
      },
      {
        type: "bullets",
        intro: "Business Verification:",
        items: [
          "GST certificate verification",
          "Business license verification",
          "Company registration verification",
        ],
      },
      {
        type: "bullets",
        intro: "Vehicle Verification:",
        items: [
          "RC (Registration Certificate) verification",
          "Driving license verification",
          "Insurance verification",
        ],
      },
      {
        type: "subheading",
        text: "5.3 Verification Status",
      },
      {
        type: "paragraph",
        text: "Your verification status affects your ability to:",
      },
      {
        type: "bullets",
        items: [
          "Post loads (for suppliers)",
          "Accept bookings (for truckers)",
          "Access certain features",
          "Build reputation and trust",
        ],
      },
      {
        type: "subheading",
        text: "5.4 False Information",
      },
      {
        type: "paragraph",
        text: "Providing false or misleading verification information may result in:",
      },
      {
        type: "bullets",
        items: [
          "Account suspension or termination",
          "Permanent ban from the platform",
          "Legal action if applicable",
        ],
      },
    ],
  },
  {
    id: "prohibited-activities",
    title: "6. Prohibited Activities",
    blocks: [
      {
        type: "paragraph",
        text: "You agree NOT to engage in the following activities while using TranZfort:",
      },
      {
        type: "subheading",
        text: "6.1 Fraudulent Activities",
      },
      {
        type: "bullets",
        items: [
          "Posting fake or non-existent loads",
          "Accepting bookings without intention to fulfill",
          "Providing false verification information",
          "Creating multiple accounts",
          "Using fake profiles or identities",
        ],
      },
      {
        type: "subheading",
        text: "6.2 Illegal Activities",
      },
      {
        type: "bullets",
        items: [
          "Using the App for illegal cargo transport",
          "Violating transportation regulations",
          "Engaging in smuggling or other illegal activities",
          "Using the App to facilitate illegal transactions",
        ],
      },
      {
        type: "subheading",
        text: "6.3 Harassment and Abuse",
      },
      {
        type: "bullets",
        items: [
          "Harassing, threatening, or abusing other users",
          "Sending inappropriate or offensive messages",
          "Sharing inappropriate content",
          "Discriminating based on race, religion, gender, or other protected characteristics",
        ],
      },
      {
        type: "subheading",
        text: "6.4 Technical Abuse",
      },
      {
        type: "bullets",
        items: [
          "Attempting to hack or compromise the App",
          "Using automated tools to scrape data",
          "Interfering with the App's functionality",
          "Spreading malware or viruses",
        ],
      },
      {
        type: "subheading",
        text: "6.5 Commercial Misuse",
      },
      {
        type: "bullets",
        items: [
          "Competing with TranZfort using our platform",
          "Soliciting users to move to competing platforms",
          "Using our platform for commercial purposes not intended",
        ],
      },
      {
        type: "subheading",
        text: "6.6 Consequences of Prohibited Activities",
      },
      {
        type: "paragraph",
        text: "We reserve the right to:",
      },
      {
        type: "bullets",
        items: [
          "Suspend or terminate your account",
          "Report illegal activities to law enforcement",
          "Pursue legal action for damages",
          "Ban you from using our platform permanently",
        ],
      },
      {
        type: "subheading",
        text: "6.7 Safe Harbor and Platform Immunity",
      },
      {
        type: "subheading",
        text: "6.7.1 Information Content Disclaimer",
      },
      {
        type: "paragraph",
        text: "TranZfort acts as a passive conduit for information submitted by users. We do not:",
      },
      {
        type: "bullets",
        items: [
          "Create, select, modify, or approve user content",
          "Guarantee the accuracy, quality, or legality of user content",
          "Endorse any opinions, advice, or recommendations expressed by users",
          "Monitor or verify all user content prior to publication",
        ],
      },
      {
        type: "subheading",
        text: "6.7.2 Intermediary Protection (Section 79 of IT Act, 2000 - India)",
      },
      {
        type: "callout",
        text: 'TranZfort qualifies as an "intermediary" under Section 79 of the Information Technology Act, 2000 (as amended) and shall not be liable for any third-party information, data, or communication link made available or hosted by it, provided that: Its function is limited to providing access to a communication system; It does not initiate the transmission, select the receiver, or modify the information; It observes due diligence while discharging its duties; It complies with lawful requests from government agencies.',
      },
      {
        type: "subheading",
        text: "6.7.3 Notice and Takedown",
      },
      {
        type: "paragraph",
        text: "If you believe any content on the platform violates your intellectual property rights, is defamatory, illegal, or harmful, or violates these Terms of Service, you may submit a complaint to legal@tranzfort.com with:",
      },
      {
        type: "bullets",
        items: [
          "Identification of the specific content",
          "The basis for your claim",
          "Your contact information",
          "A statement that the information is accurate",
        ],
      },
      {
        type: "paragraph",
        text: "TranZfort will review complaints and may remove content at its sole discretion. However, TranZfort is under no obligation to monitor content or remove specific content unless required by law.",
      },
    ],
  },
  {
    id: "fees-and-payments",
    title: "7. Fees and Payments",
    blocks: [
      {
        type: "subheading",
        text: "7.1 Current Service Fees",
      },
      {
        type: "paragraph",
        text: "As of the Effective Date of these Terms, TranZfort does not charge any service fees. The platform is provided free of charge to both suppliers and truckers for marketplace access and basic features.",
      },
      {
        type: "paragraph",
        text: "TranZfort reserves the right to introduce service fees for certain features in the future. Any such fees will be: clearly disclosed before you incur them; subject to your explicit consent; compliant with applicable pricing regulations.",
      },
      {
        type: "subheading",
        text: "7.2 Payment Terms Between Users",
      },
      {
        type: "callout",
        text: "Critical Notice: TranZfort is NOT a payment processor, escrow agent, or financial intermediary.",
      },
      {
        type: "paragraph",
        text: "Between Supplier and Trucker: All payment terms are agreed upon solely between the supplier and trucker. TranZfort does not process, handle, transfer, or hold any payments. TranZfort is not responsible for any payment disputes between users. We strongly recommend that suppliers and truckers: Use formal written agreements for all transactions; Consider using escrow services for high-value transactions; Verify payment methods and terms before commencing services; Document all payment agreements in writing.",
      },
      {
        type: "subheading",
        text: "7.3 No Payment Guarantee or Responsibility",
      },
      {
        type: "callout",
        text: "YOU EXPRESSLY ACKNOWLEDGE THAT TRANZFORT: Does NOT guarantee that suppliers will pay truckers; Does NOT guarantee that truckers will receive payment; Does NOT participate in, mediate, or resolve payment disputes between users; Does NOT provide any form of payment protection, escrow, or insurance; Is NOT liable for non-payment, delayed payment, or payment fraud by any user.",
      },
      {
        type: "paragraph",
        text: "All payment disputes must be resolved directly between the supplier and trucker, or through appropriate legal remedies. TranZfort may, at its sole discretion, provide a dispute resolution platform, but participation in such platform is voluntary and does not create any liability for TranZfort.",
      },
    ],
  },
  {
    id: "cancellation-and-refunds",
    title: "8. Cancellation and Refunds",
    blocks: [
      {
        type: "subheading",
        text: "8.1 Load Cancellation (Suppliers)",
      },
      {
        type: "bullets",
        intro: "Before Trucker Acceptance:",
        items: [
          "You may cancel loads at any time before a trucker accepts",
          "No penalty or fee applies",
          "You should cancel in the App to notify interested truckers",
        ],
      },
      {
        type: "bullets",
        intro: "After Trucker Acceptance:",
        items: [
          "Cancellation may result in penalties depending on timing",
          "Late cancellations may affect your reputation",
          "Dispute resolution process is available if needed",
        ],
      },
      {
        type: "subheading",
        text: "8.2 Booking Cancellation (Truckers)",
      },
      {
        type: "bullets",
        intro: "Before Pickup:",
        items: [
          "You may cancel bookings with reasonable notice",
          "Suppliers may impose cancellation fees for late cancellations",
          "Communicate cancellations proactively",
        ],
      },
      {
        type: "bullets",
        intro: "After Pickup:",
        items: [
          "Cancellations are generally not accepted",
          "Dispute resolution process is available if circumstances are exceptional",
        ],
      },
      {
        type: "subheading",
        text: "8.3 Service Fee Refunds",
      },
      {
        type: "paragraph",
        text: "TranZfort Service Fees: As we currently do not charge service fees, refunds are not applicable. If we introduce fees in the future, refund requests must be made within 30 days. Contact support@tranzfort.com for refund requests.",
      },
      {
        type: "subheading",
        text: "8.4 Dispute Resolution",
      },
      {
        type: "paragraph",
        text: "If there is a dispute about cancellations or refunds:",
      },
      {
        type: "bullets",
        items: [
          "Use our in-app dispute resolution system",
          "Create a support ticket with evidence",
          "We will mediate but cannot guarantee resolution",
          "Final decision may require legal action",
        ],
      },
    ],
  },
  {
    id: "limitation-of-liability",
    title: "9. Limitation of Liability and Disclaimers",
    blocks: [
      {
        type: "subheading",
        text: "9.1 Platform Status and Disclaimers",
      },
      {
        type: "callout",
        text: "TRANZFORT IS A TECHNOLOGY PLATFORM ONLY AND IS EXPRESSLY NOT: A transportation company, freight carrier, or logistics provider; A common carrier, contract carrier, or private carrier; A cargo insurer, freight forwarder, or shipping agent; A payment processor, financial institution, or escrow agent; A guarantor, surety, or warrantor of any transaction; An employer, principal, or agent of any user; A supervisor, controller, or manager of any transportation service; A provider, owner, or operator of any vehicle or equipment; A handler, custodian, or bailee of any cargo or goods; A credit reporting agency or financial advisor.",
      },
      {
        type: "subheading",
        text: "9.2 Assumption of Risk",
      },
      {
        type: "paragraph",
        text: "BY USING THE PLATFORM, YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT:",
      },
      {
        type: "bullets",
        items: [
          "Transportation Risk: All transportation services involve inherent risks including cargo damage, loss, theft, delay, and accidents. You voluntarily assume all such risks.",
          "Counterparty Risk: You may deal with users who provide false information, fail to perform, or engage in fraudulent activities. You assume all risks of dealing with other users.",
          "No Screening: TranZfort does not conduct background checks, verify credentials, or screen users beyond the verification features offered on the platform.",
          "Independent Judgment: You are solely responsible for using your independent judgment in selecting counterparties and assessing risks.",
          "Platform Limitations: The platform may experience technical issues, downtime, or errors. TranZfort does not guarantee uninterrupted or error-free service.",
        ],
      },
      {
        type: "subheading",
        text: "9.3 Comprehensive Liability Exclusion",
      },
      {
        type: "paragraph",
        text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRANZFORT AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR:",
      },
      {
        type: "bullets",
        intro: "A. Cargo and Transportation Matters:",
        items: [
          "Any loss, damage, destruction, theft, or disappearance of cargo, goods, or property",
          "Any delay, non-delivery, misdelivery, or partial delivery of cargo",
          "Any damage to vehicles, equipment, or property",
          "Any personal injury, death, or bodily harm arising from transportation services",
          "Any claims related to cargo insurance or lack thereof",
        ],
      },
      {
        type: "bullets",
        intro: "B. Financial and Payment Matters:",
        items: [
          "Non-payment, delayed payment, or partial payment by any user",
          "Payment fraud, chargebacks, or financial losses",
          "Currency exchange losses or transaction fees",
          "Loss of profits, revenue, or anticipated savings",
          "Business interruption or loss of business opportunities",
        ],
      },
      {
        type: "bullets",
        intro: "C. User Conduct and Disputes:",
        items: [
          "Any acts, omissions, or conduct of any user on the platform",
          "Any disputes, conflicts, or disagreements between users",
          "Any defamation, libel, slander, or reputational harm",
          "Any violation of laws or regulations by users",
          "Any fraudulent, criminal, or illegal activities by users",
        ],
      },
      {
        type: "bullets",
        intro: "D. Technical and Operational Matters:",
        items: [
          "Platform downtime, unavailability, or technical failures",
          "Data loss, corruption, or unauthorized access",
          "Errors, inaccuracies, or omissions in platform content",
          "Viruses, malware, or security breaches (despite our security measures)",
          "Third-party service failures (Supabase, Firebase, Google Maps, etc.)",
          "Internet connectivity issues or service provider outages",
        ],
      },
      {
        type: "bullets",
        intro: "E. Indirect and Consequential Damages:",
        items: [
          "Indirect, incidental, special, consequential, or punitive damages",
          "Loss of data, goodwill, reputation, or use",
          "Costs of substitute services or goods",
          "Emotional distress, mental anguish, or psychological harm",
        ],
      },
      {
        type: "subheading",
        text: "9.4 Maximum Liability Cap",
      },
      {
        type: "paragraph",
        text: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:",
      },
      {
        type: "paragraph",
        text: "Our total aggregate liability to you for any and all claims, damages, losses, or expenses arising out of or relating to these Terms, the platform, or any services provided, whether in contract, tort (including negligence), strict liability, or any other legal theory, shall be limited to: INR 5,000 (Indian Rupees Five Thousand Only) or the total amount of fees (if any) actually paid by you to TranZfort in the 12 months preceding the event giving rise to the claim, whichever is higher.",
      },
      {
        type: "paragraph",
        text: "THE FOREGOING LIMITATIONS SHALL APPLY REGARDLESS OF WHETHER: TranZfort was advised of the possibility of such damages; The remedy fails of its essential purpose; The claim arises from contract, tort, strict liability, or any other legal theory; Multiple claims are brought or multiple parties are involved.",
      },
      {
        type: "subheading",
        text: "9.5 Exclusions Not Applicable",
      },
      {
        type: "paragraph",
        text: "Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for certain types of damages. To the extent that such jurisdictions apply to these Terms, the above exclusions and limitations may not apply to you. However, in such cases, our liability shall still be limited to the maximum extent permitted by the laws of India.",
      },
      {
        type: "subheading",
        text: "9.6 User Responsibility for Insurance",
      },
      {
        type: "paragraph",
        text: "YOU ACKNOWLEDGE AND AGREE THAT: TranZfort does not provide any insurance coverage. You are solely responsible for obtaining and maintaining appropriate insurance for your activities, including but not limited to: cargo insurance for goods being transported; vehicle insurance for trucks and transportation equipment; liability insurance for business operations; workers compensation insurance where required by law; any other insurance required by applicable regulations.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "10. Intellectual Property and License",
    blocks: [
      {
        type: "subheading",
        text: "10.1 Our Intellectual Property",
      },
      {
        type: "paragraph",
        text: "TranZfort owns all intellectual property rights in: the App and its design; the source code and underlying technology; the TranZfort name, logo, and trademarks; all content we create (documentation, marketing materials).",
      },
      {
        type: "subheading",
        text: "10.2 Your Content and License Grant",
      },
      {
        type: "paragraph",
        text: "You retain ownership of: your profile information; loads you post; reviews and ratings you provide; messages you send; any other content you submit.",
      },
      {
        type: "paragraph",
        text: "Broad License to TranZfort: By posting, uploading, displaying, performing, or transmitting content on or through the platform, you grant TranZfort a worldwide, non-exclusive, royalty-free, fully paid-up, perpetual, irrevocable, sublicensable, and transferable license to: display your content to other users as intended by the platform functionality; store, host, and back up your content; modify your content for technical purposes (e.g., formatting, resizing images); use your content for platform operation, improvement, and safety; share your content with service providers who assist in platform operation; use your content for marketing, promotional, and advertising purposes (with your separate consent for identifiable content); create anonymized and aggregated data for analytics and research; comply with legal obligations and respond to lawful requests.",
      },
      {
        type: "paragraph",
        text: "Purpose of License: This license is necessary for the functioning of the marketplace platform, enabling us to connect you with other users and provide the services you request.",
      },
      {
        type: "paragraph",
        text: "Moral Rights: To the extent permitted by law, you waive any moral rights you may have in your content.",
      },
      {
        type: "paragraph",
        text: "Representations: You represent and warrant that: you own or have the necessary rights to grant this license; your content does not infringe any third-party intellectual property rights; your content is not defamatory, illegal, or harmful; your content complies with these Terms and applicable laws.",
      },
      {
        type: "subheading",
        text: "10.3 Platform Content Disclaimers",
      },
      {
        type: "paragraph",
        text: "USER CONTENT DISCLAIMER: All content posted by users is the sole responsibility of the user who originated it. TranZfort does not guarantee the accuracy, integrity, quality, or legality of any user content. You may be exposed to content that is inaccurate, offensive, indecent, or objectionable.",
      },
      {
        type: "paragraph",
        text: "PLATFORM CONTENT: While we strive for accuracy, TranZfort makes no representations or warranties about the completeness, reliability, or timeliness of any platform content, including but not limited to: distance calculations and route information; estimated travel times; market rate suggestions; user ratings and reviews; availability of loads or truckers.",
      },
      {
        type: "paragraph",
        text: "NO RELIANCE: You should not rely solely on any information provided through the platform without independently verifying its accuracy.",
      },
    ],
  },
  {
    id: "dispute-resolution",
    title: "11. Dispute Resolution",
    blocks: [
      {
        type: "subheading",
        text: "11.1 In-App Dispute Resolution",
      },
      {
        type: "paragraph",
        text: "We provide an in-app dispute resolution system for:",
      },
      {
        type: "bullets",
        items: [
          "Payment disputes between supplier and trucker",
          "Cargo damage or loss disputes",
          "Service quality disputes",
          "Other transaction-related disputes",
        ],
      },
      {
        type: "subheading",
        text: "11.2 Dispute Process",
      },
      {
        type: "numbered",
        items: [
          "Create a support ticket with detailed information",
          "Provide evidence (photos, documents, messages)",
          "We will review and attempt mediation",
          "If mediation fails, parties may need to pursue legal remedies",
        ],
      },
      {
        type: "subheading",
        text: "11.3 Support Tickets",
      },
      {
        type: "paragraph",
        text: "For disputes not covered by our in-app system:",
      },
      {
        type: "bullets",
        items: [
          "Create a support ticket at support@tranzfort.com",
          "Provide all relevant documentation",
          "We aim to respond within 3-5 business days",
        ],
      },
      {
        type: "subheading",
        text: "11.4 No Guarantee of Resolution",
      },
      {
        type: "paragraph",
        text: "We cannot guarantee resolution of all disputes. Some disputes may require: legal action; arbitration; court proceedings.",
      },
    ],
  },
  {
    id: "termination",
    title: "12. Termination",
    blocks: [
      {
        type: "subheading",
        text: "12.1 By You",
      },
      {
        type: "paragraph",
        text: "You may terminate your account at any time by:",
      },
      {
        type: "bullets",
        items: [
          "Going to Settings > Delete Account in the App",
          "Confirming your identity (re-authentication required)",
          "Following the deletion process",
        ],
      },
      {
        type: "subheading",
        text: "12.2 By TranZfort",
      },
      {
        type: "paragraph",
        text: "We may suspend or terminate your account for:",
      },
      {
        type: "bullets",
        items: [
          "Violation of these Terms of Service",
          "Fraudulent activity",
          "Inactivity for 12 consecutive months",
          "Failure to pay applicable fees (when introduced)",
          "Other violations of our policies",
        ],
      },
      {
        type: "subheading",
        text: "12.3 Effect of Termination",
      },
      {
        type: "paragraph",
        text: "Upon termination:",
      },
      {
        type: "bullets",
        items: [
          "Your right to use the App immediately ceases",
          "Your personal data will be deleted after 30 days (with grace period for restoration)",
          "We may retain certain data as required by law or for legitimate business purposes",
          "Any pending disputes, reviews, or claims may be retained for resolution purposes",
          "We may preserve anonymized data for platform analytics and safety",
        ],
      },
      {
        type: "subheading",
        text: "12.4 Survival",
      },
      {
        type: "paragraph",
        text: "The following provisions survive termination: Indemnification; Limitation of Liability; Dispute Resolution; Governing Law.",
      },
      {
        type: "subheading",
        text: "12.5 Content Moderation Rights",
      },
      {
        type: "paragraph",
        text: "TranZfort reserves the right, but not the obligation, to: monitor, review, and remove any content that violates these Terms; suspend or terminate accounts for policy violations; report illegal activities to appropriate authorities; cooperate with law enforcement and regulatory authorities; remove content that poses a risk to user safety or platform integrity; disclose information to protect rights, property, or safety of users or the public.",
      },
      {
        type: "subheading",
        text: "12.6 No Agency Relationship",
      },
      {
        type: "callout",
        text: "YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT: No agency, partnership, joint venture, employer-employee, or franchisor-franchisee relationship is intended or created by these Terms. You are an independent user of the platform, not an agent, representative, or employee of TranZfort. TranZfort does not control, direct, or supervise your activities or business operations. You have no authority to bind TranZfort to any obligation or liability. You are solely responsible for your own business decisions, operations, and compliance with laws. Any interactions or transactions you enter into with other users are solely between you and those users. TranZfort shall not be liable for any acts, omissions, or conduct of any user.",
      },
    ],
  },
  {
    id: "service-modifications",
    title: "13. Service Modifications",
    blocks: [
      {
        type: "subheading",
        text: "13.1 Right to Modify",
      },
      {
        type: "paragraph",
        text: "We reserve the right to: modify or discontinue any feature of the App; introduce new features; change pricing (with notice); suspend or discontinue the App entirely.",
      },
      {
        type: "subheading",
        text: "13.2 Notice of Changes",
      },
      {
        type: "paragraph",
        text: "For material changes, we will: provide at least 30 days notice; notify users via email or in-app notification; provide information about your options.",
      },
      {
        type: "subheading",
        text: "13.3 No Compensation",
      },
      {
        type: "paragraph",
        text: "We are not liable for: losses resulting from service modifications; losses resulting from feature discontinuation; losses resulting from pricing changes.",
      },
    ],
  },
  {
    id: "indemnification",
    title: "14. Indemnification",
    blocks: [
      {
        type: "callout",
        text: 'YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD HARMLESS TRANZFORT, ITS PARENTS, SUBSIDIARIES, AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, AND LICENSORS (COLLECTIVELY, "TRANZFORT PARTIES") FROM AND AGAINST:',
      },
      {
        type: "bullets",
        intro: "A. All Claims and Damages:",
        items: [
          "Any claims, demands, damages, losses, liabilities, costs, and expenses (including reasonable legal fees)",
          "Any third-party claims arising from or relating to your use of the platform",
          "Any claims resulting from your violation of these Terms",
          "Any claims resulting from your violation of any rights of another party",
          "Any claims resulting from your violation of applicable laws or regulations",
        ],
      },
      {
        type: "bullets",
        intro: "B. User Content and Conduct:",
        items: [
          "Content you submit, post, transmit, or make available through the platform",
          "Your interactions with other users and transactions conducted through the platform",
          "Any damage to persons or property resulting from your use of the platform",
          "Any negligent or wrongful conduct by you",
        ],
      },
      {
        type: "bullets",
        intro: "C. Specific Transportation Claims:",
        items: [
          "Any claims related to cargo loss, damage, or delay",
          "Any claims related to vehicle accidents or personal injury",
          "Any claims related to non-payment or payment disputes",
          "Any claims arising from the transportation services arranged through the platform",
        ],
      },
      {
        type: "bullets",
        intro: "D. Cooperation:",
        items: [
          "You agree to cooperate fully with TranZfort in the defense of any such claims.",
          "TranZfort reserves the right to assume the exclusive defense and control of any matter subject to indemnification by you.",
        ],
      },
      {
        type: "paragraph",
        text: "SURVIVAL: This indemnification obligation shall survive the termination of these Terms and your use of the platform.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "15. Governing Law and Force Majeure",
    blocks: [
      {
        type: "subheading",
        text: "15.1 Governing Law",
      },
      {
        type: "paragraph",
        text: "These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.",
      },
      {
        type: "subheading",
        text: "15.2 Jurisdiction",
      },
      {
        type: "paragraph",
        text: "Any disputes, claims, or legal proceedings arising from or relating to these Terms or your use of the App shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India. You expressly consent to the personal jurisdiction of such courts.",
      },
      {
        type: "subheading",
        text: "15.3 Dispute Resolution Before Litigation",
      },
      {
        type: "paragraph",
        text: "Before initiating any legal action, you agree to: first attempt to resolve disputes through our in-app support system; provide written notice of the dispute to legal@tranzfort.com; allow at least 30 days for good-faith resolution efforts; participate in mediation if requested by either party.",
      },
      {
        type: "subheading",
        text: "15.4 Force Majeure",
      },
      {
        type: "paragraph",
        text: "TranZfort shall not be liable for any failure or delay in performing our obligations under these Terms where such failure or delay results from causes beyond our reasonable control, including but not limited to: acts of God, natural disasters, earthquakes, floods, or epidemics; war, terrorism, riots, embargoes, or civil unrest; government actions, laws, regulations, or orders; strikes, labor disputes, or industrial actions; Internet or telecommunications failures, power outages; failure of third-party services (cloud providers, payment processors, etc.); cyber attacks, hacking, or security breaches beyond our reasonable control.",
      },
      {
        type: "paragraph",
        text: "During any force majeure event, TranZfort's obligations under these Terms shall be suspended for the duration of such event.",
      },
      {
        type: "subheading",
        text: "15.5 Waiver and Severability",
      },
      {
        type: "paragraph",
        text: "Waiver: The failure of TranZfort to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.",
      },
      {
        type: "paragraph",
        text: "Severability: If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be severed, and the remaining provisions shall continue in full force and effect.",
      },
    ],
  },
  {
    id: "contact",
    title: "16. Contact Information",
    blocks: [
      {
        type: "paragraph",
        text: "If you have any questions about these Terms of Service, please contact us:",
      },
      {
        type: "bullets",
        intro: "Customer Support:",
        items: ["Email: support@tranzfort.com", "Website: https://tranzfort.com"],
      },
      {
        type: "bullets",
        intro: "Legal Inquiries:",
        items: ["Email: legal@tranzfort.com"],
      },
      {
        type: "bullets",
        intro: "Business Registration:",
        items: ["TranZfort Logistics Technologies Pvt Ltd", "Mumbai, Maharashtra, India"],
      },
    ],
  },
];
