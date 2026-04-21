export interface LegalSection {
  id: string;
  title: string;
  blocks: LegalBlock[];
}

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; intro?: string; items: string[] }
  | { type: "numbered"; items: string[] }
  | { type: "callout"; text: string };

export const privacySections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    blocks: [
      {
        type: "paragraph",
        text: 'TranZfort Logistics Technologies Pvt Ltd ("TranZfort", "we", "our", "us", "the Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our logistics marketplace mobile application ("App") and related services.',
      },
      {
        type: "callout",
        text: "IMPORTANT NOTICE: TranZfort is a technology company that operates a digital marketplace platform connecting suppliers (shippers) with truckers (transporters). We are NOT a transportation company, logistics provider, freight forwarder, or common carrier. We do not own vehicles, employ drivers, or handle cargo. We merely facilitate connections between independent third parties.",
      },
      {
        type: "paragraph",
        text: "By using TranZfort, you agree to the collection and use of information in accordance with this policy.",
      },
      {
        type: "subheading",
        text: "1.1 Scope",
      },
      {
        type: "paragraph",
        text: "This Privacy Policy applies to:",
      },
      {
        type: "bullets",
        items: [
          "The TranZfort mobile application for Android",
          "All features and services offered through the App",
          "Our website (tranzfort.com) where applicable",
          "Communication with our support team",
        ],
      },
      {
        type: "subheading",
        text: "1.2 Your Consent",
      },
      {
        type: "paragraph",
        text: "By using TranZfort, you consent to the collection and processing of your information as described in this Privacy Policy. If you do not agree with this policy, please do not use our App.",
      },
    ],
  },
  {
    id: "data-we-collect",
    title: "2. Data We Collect",
    blocks: [
      {
        type: "paragraph",
        text: "We collect several types of information to provide and improve our services:",
      },
      {
        type: "subheading",
        text: "2.1 Personal Information",
      },
      {
        type: "paragraph",
        text: "We collect the following personal information when you create an account or use our services:",
      },
      {
        type: "bullets",
        intro: "Account Information:",
        items: ["Full name", "Email address", "Phone number (mobile)", "Profile photo"],
      },
      {
        type: "bullets",
        intro: "Business Information (for business users):",
        items: [
          "Company name",
          "Business type (individual proprietorship, partnership, company)",
          "GST number (Goods and Services Tax)",
          "Business address",
          "PAN number (Permanent Account Number)",
          "Aadhaar number (for identity verification only)",
        ],
      },
      {
        type: "bullets",
        intro: "Contact Preferences:",
        items: [
          "Preferred language (English, Hindi)",
          "Communication preferences (email, SMS, in-app notifications)",
        ],
      },
      {
        type: "subheading",
        text: "2.2 Location Data",
      },
      {
        type: "paragraph",
        text: "We collect location data to provide core logistics functionality:",
      },
      {
        type: "bullets",
        intro: "Precise Location:",
        items: [
          "GPS coordinates (latitude, longitude) for: Load posting and discovery, Matching suppliers with truckers in specific regions, Distance calculation for load matching, Displaying location on maps within the App",
          "City and State information for: Load posting and discovery, Matching suppliers with truckers in specific regions, Location-based service availability",
        ],
      },
      {
        type: "bullets",
        intro: "Location Permissions:",
        items: [
          "We request location permissions only when necessary for app functionality",
          "You can disable location services in device settings (this may affect app functionality)",
          "Location is only collected when the App is in foreground use",
        ],
      },
      {
        type: "subheading",
        text: "2.3 Usage Data",
      },
      {
        type: "paragraph",
        text: "We collect information about how you use our App:",
      },
      {
        type: "bullets",
        intro: "Activity Data:",
        items: [
          "Loads posted and their details",
          "Trips completed and their routes",
          "Chat messages sent and received",
          "Reviews and ratings given/received",
          "Booking requests and acceptance/rejection",
          "Profile views and interactions",
        ],
      },
      {
        type: "bullets",
        intro: "Performance Data:",
        items: ["App crashes and errors", "Response times", "Feature usage patterns"],
      },
      {
        type: "subheading",
        text: "2.4 Device Information",
      },
      {
        type: "paragraph",
        text: "We collect device information to ensure compatibility and improve performance:",
      },
      {
        type: "bullets",
        items: [
          "Device type and model",
          "Operating system and version",
          "Unique device identifier (for push notifications)",
          "App version",
          "Screen resolution",
        ],
      },
      {
        type: "subheading",
        text: "2.5 Documents and Photos",
      },
      {
        type: "paragraph",
        text: "We may collect the following when you use verification features:",
      },
      {
        type: "bullets",
        items: [
          "Profile photo",
          "Aadhaar card (for verification)",
          "PAN card (for business verification)",
          "GST certificate (for business verification)",
          "Business license documents",
          "Vehicle registration documents (RC)",
          "Driving license (for truckers)",
          "Insurance documents",
        ],
      },
      {
        type: "subheading",
        text: "2.6 Communications Data",
      },
      {
        type: "paragraph",
        text: "We collect information when you communicate with us:",
      },
      {
        type: "bullets",
        items: [
          "Support ticket messages",
          "Feedback and suggestions",
          "Email correspondence",
          "Chat logs with support team",
        ],
      },
    ],
  },
  {
    id: "how-we-use-your-data",
    title: "3. How We Use Your Data",
    blocks: [
      {
        type: "paragraph",
        text: "We use the collected information for the following purposes:",
      },
      {
        type: "subheading",
        text: "3.1 Core Service Provision",
      },
      {
        type: "bullets",
        intro: "To provide our logistics marketplace:",
        items: [
          "Match suppliers with truckers based on location, load requirements, and availability",
          "Facilitate communication between suppliers and truckers",
          "Enable trip tracking and real-time updates",
          "Process booking requests and confirmations",
          "Calculate distances and estimated travel times",
          "Provide route optimization and navigation",
        ],
      },
      {
        type: "bullets",
        intro: "For user authentication and security:",
        items: [
          "Verify your identity when you create an account",
          "Authenticate you when you log in",
          "Protect against unauthorized access",
          "Prevent fraud and ensure platform integrity",
        ],
      },
      {
        type: "subheading",
        text: "3.2 Verification and Trust",
      },
      {
        type: "bullets",
        intro: "To maintain platform trust and safety:",
        items: [
          "Verify user identity using Aadhaar and PAN (for business users)",
          "Verify business credentials (GST, business license)",
          "Display verification status to build trust",
          "Calculate and display trust scores based on reviews",
          "Enable users to make informed decisions about counterparty reliability",
        ],
      },
      {
        type: "subheading",
        text: "3.3 Communication",
      },
      {
        type: "bullets",
        intro: "To communicate with you:",
        items: [
          "Send push notifications about booking requests, trip updates, and important alerts",
          "Respond to your support inquiries",
          "Send service announcements and updates",
          "Provide transaction confirmations",
        ],
      },
      {
        type: "subheading",
        text: "3.4 Improvement and Development",
      },
      {
        type: "bullets",
        intro: "To improve our services:",
        items: [
          "Analyze usage patterns to understand how users interact with the App",
          "Debug technical issues and improve app performance",
          "Develop new features and functionality",
          "Conduct research and analysis to improve user experience",
        ],
      },
      {
        type: "subheading",
        text: "3.5 Legal Compliance",
      },
      {
        type: "bullets",
        intro: "To comply with legal obligations:",
        items: [
          "Comply with applicable laws and regulations",
          "Respond to lawful requests from authorities",
          "Protect our rights and property",
          "Enforce our Terms of Service",
        ],
      },
    ],
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing",
    blocks: [
      {
        type: "paragraph",
        text: "We may share your information in the following circumstances:",
      },
      {
        type: "subheading",
        text: "4.1 Sharing with Other Users",
      },
      {
        type: "bullets",
        intro: "Profile Information (Public):",
        items: [
          "Your name, profile photo, verification status, trust score, and rating are visible to other users",
          "This information helps users make informed decisions about potential business partners",
        ],
      },
      {
        type: "bullets",
        intro: "Contact Information (Conditional):",
        items: [
          "Your phone number and email are only shared when:",
          "You accept a booking request",
          "You initiate contact with another user",
          "You explicitly consent to share",
        ],
      },
      {
        type: "bullets",
        intro: "Location Data (During Active Trips):",
        items: [
          "Your real-time location is shared with the counterparty during an active trip",
          "This enables trip tracking and delivery verification",
          "Location sharing stops when the trip is completed",
        ],
      },
      {
        type: "bullets",
        intro: "Load and Trip Information:",
        items: [
          "Load details (origin, destination, cargo, rates) are visible to relevant users",
          "Trip status and updates are shared between supplier and trucker",
        ],
      },
      {
        type: "subheading",
        text: "4.2 Sharing with Third-Party Service Providers",
      },
      {
        type: "paragraph",
        text: "We use the following third-party services to provide our App:",
      },
      {
        type: "bullets",
        intro: "Supabase:",
        items: [
          "Database hosting and management",
          "User authentication (email/password, Google Sign-In)",
          "Real-time data synchronization",
          "Storage for documents and images",
        ],
      },
      {
        type: "bullets",
        intro: "Firebase:",
        items: [
          "Push notification services",
          "Crash analytics and error reporting",
          "Performance monitoring",
        ],
      },
      {
        type: "bullets",
        intro: "Google Maps Platform:",
        items: [
          "Location services and geocoding",
          "Route calculation and navigation",
          "Distance and time estimation",
          "Place autocomplete for location search",
        ],
      },
      {
        type: "paragraph",
        text: "Note: We do not sell your personal data to advertisers or third parties for marketing purposes. Our third-party service providers are bound by strict data protection obligations and are only permitted to use your data as necessary to provide services to us.",
      },
      {
        type: "subheading",
        text: "4.3 Sharing for Legal Reasons",
      },
      {
        type: "paragraph",
        text: "We may share your information when we believe it is necessary to:",
      },
      {
        type: "bullets",
        items: [
          "Comply with legal obligations (court orders, subpoenas, regulations)",
          "Protect our rights, property, and safety",
          "Protect our users or the public from fraud or illegal activities",
          "Enforce our Terms of Service",
        ],
      },
      {
        type: "subheading",
        text: "4.4 Business Transfers",
      },
      {
        type: "paragraph",
        text: "In the event of a merger, acquisition, or sale of all or part of our assets, your user information may be transferred to the new owner. We will notify you of any such transfer and give you the opportunity to opt-out.",
      },
    ],
  },
  {
    id: "data-security",
    title: "5. Data Security",
    blocks: [
      {
        type: "paragraph",
        text: "We implement appropriate technical and organizational measures to protect your information:",
      },
      {
        type: "subheading",
        text: "5.1 Encryption",
      },
      {
        type: "bullets",
        intro: "In Transit:",
        items: [
          "All data transmitted between your device and our servers is encrypted using HTTPS/TLS",
          "This protects your data from interception during transmission",
        ],
      },
      {
        type: "bullets",
        intro: "At Rest:",
        items: [
          "Sensitive information (Aadhaar, PAN, passwords) is encrypted in our databases",
          "Documents and images are stored securely with access controls",
        ],
      },
      {
        type: "subheading",
        text: "5.2 Access Control",
      },
      {
        type: "bullets",
        items: [
          "Access to user data is restricted to authorized personnel only",
          "Employees undergo training on data protection and privacy",
          "Access is logged and monitored regularly",
          "Multi-factor authentication is used for administrative access",
        ],
      },
      {
        type: "subheading",
        text: "5.3 Secure Authentication",
      },
      {
        type: "bullets",
        items: [
          "Passwords are hashed using industry-standard algorithms",
          "We support Google Sign-In for secure authentication",
          "We do not store your Google account password",
        ],
      },
      {
        type: "subheading",
        text: "5.4 Regular Security Reviews",
      },
      {
        type: "bullets",
        items: [
          "We conduct regular security audits",
          "We monitor for vulnerabilities and address them promptly",
          "We use industry-standard security frameworks and best practices",
        ],
      },
      {
        type: "subheading",
        text: "5.5 Data Breach Notification",
      },
      {
        type: "paragraph",
        text: "In the event of a data breach that affects your personal information:",
      },
      {
        type: "bullets",
        items: [
          "We will notify you without undue delay",
          "We will describe the nature of the breach",
          "We will outline the steps we are taking to address it",
          "We will provide guidance on how you can protect yourself",
        ],
      },
    ],
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    blocks: [
      {
        type: "subheading",
        text: "6.1 Retention Periods",
      },
      {
        type: "bullets",
        intro: "Active Accounts:",
        items: [
          "We retain your data for as long as your account remains active",
          "This allows us to provide you with continuous service",
        ],
      },
      {
        type: "bullets",
        intro: "Inactive Accounts:",
        items: [
          "If your account remains inactive for 12 months, we may send you a reminder",
          "If you do not respond within 30 days, we may suspend your account",
        ],
      },
      {
        type: "bullets",
        intro: "After Account Deletion:",
        items: [
          "When you delete your account, it is deactivated immediately",
          "Your personal data is permanently deleted from our active servers after 30 days",
          "This grace period allows you to restore your account if you change your mind",
          "Some anonymized data may be retained for analytical and legal compliance purposes",
        ],
      },
      {
        type: "bullets",
        intro: "Chat Messages:",
        items: [
          "Chat messages are retained for 6 months after account deletion for dispute resolution purposes",
          "This retention helps resolve disputes between users that may arise after account closure",
          "Anonymized message metadata may be retained longer for platform safety analysis",
        ],
      },
      {
        type: "subheading",
        text: "6.2 Data Minimization",
      },
      {
        type: "paragraph",
        text: "We only collect data that is necessary to provide our services. We do not collect excessive or irrelevant information.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    blocks: [
      {
        type: "paragraph",
        text: "You have the following rights regarding your personal information:",
      },
      {
        type: "subheading",
        text: "7.1 Right to Access",
      },
      {
        type: "paragraph",
        text: "You can request a copy of the personal information we hold about you, including:",
      },
      {
        type: "bullets",
        items: [
          "Profile information",
          "Load and trip history",
          "Communication history",
          "Verification documents",
        ],
      },
      {
        type: "subheading",
        text: "7.2 Right to Correction",
      },
      {
        type: "paragraph",
        text: "You can update or correct your personal information at any time:",
      },
      {
        type: "bullets",
        items: [
          "Profile information can be updated in the App settings",
          "Verification documents can be updated if they expire",
          "Contact our support team if you need help with corrections",
        ],
      },
      {
        type: "subheading",
        text: "7.3 Right to Deletion",
      },
      {
        type: "paragraph",
        text: "You can delete your account and all associated data:",
      },
      {
        type: "bullets",
        items: [
          "Go to Settings > Delete Account in the App",
          "Confirm your identity (re-authentication required)",
          "Your account is deactivated immediately",
          "Data is permanently deleted after 30 days",
          "You can cancel deletion during this grace period",
        ],
      },
      {
        type: "subheading",
        text: "7.4 Right to Opt-Out",
      },
      {
        type: "paragraph",
        text: "You can opt-out of certain data collection:",
      },
      {
        type: "bullets",
        items: [
          "Disable push notifications in device settings",
          "Disable location services (affects app functionality)",
          "Unsubscribe from marketing communications",
          "Note: Some opt-outs may affect app functionality",
        ],
      },
      {
        type: "subheading",
        text: "7.5 Right to Portability",
      },
      {
        type: "paragraph",
        text: "You can request a copy of your data in a structured, commonly used format. This allows you to transfer your data to another service. Contact our support team to make this request.",
      },
      {
        type: "subheading",
        text: "7.6 Right to Withdraw Consent",
      },
      {
        type: "paragraph",
        text: "You can withdraw your consent to certain data processing:",
      },
      {
        type: "bullets",
        items: [
          "Disable location permissions in device settings",
          "Uninstall the App to stop all data collection",
          "Note: Some data collection is necessary for core functionality",
        ],
      },
    ],
  },
  {
    id: "childrens-privacy",
    title: "8. Children's Privacy",
    blocks: [
      {
        type: "paragraph",
        text: "Our App is not intended for users under 18 years of age. We do not knowingly collect personal information from children under 18. If we discover that we have inadvertently collected such information, we will take steps to delete it immediately.",
      },
      {
        type: "paragraph",
        text: "If you are a parent or guardian and believe your child has provided us with personal information, please contact us at privacy@tranzfort.com.",
      },
    ],
  },
  {
    id: "international-transfers",
    title: "9. International Data Transfers",
    blocks: [
      {
        type: "paragraph",
        text: "Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer your information, we ensure:",
      },
      {
        type: "bullets",
        items: [
          "Appropriate safeguards are in place",
          "Your information is protected in accordance with this Privacy Policy",
          "Any transfer is necessary for the provision of our services",
        ],
      },
    ],
  },
  {
    id: "changes-to-policy",
    title: "10. Changes to This Policy",
    blocks: [
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time to reflect:",
      },
      {
        type: "bullets",
        items: [
          "Changes in our practices",
          "Changes in applicable laws",
          "New features or services",
        ],
      },
      {
        type: "subheading",
        text: "10.1 Notification of Changes",
      },
      {
        type: "paragraph",
        text: "We will notify you of material changes by:",
      },
      {
        type: "bullets",
        items: [
          "Posting the new policy in the App",
          "Sending an email notification (if you have provided consent)",
          "Sending an in-app notification",
        ],
      },
      {
        type: "subheading",
        text: "10.2 Continued Use",
      },
      {
        type: "paragraph",
        text: "Your continued use of the App after changes to this Privacy Policy constitutes your acceptance of the updated policy.",
      },
    ],
  },
  {
    id: "contact",
    title: "11. Contact Information",
    blocks: [
      {
        type: "paragraph",
        text: "If you have any questions about this Privacy Policy or our data practices, please contact us:",
      },
      {
        type: "bullets",
        items: [
          "Email: privacy@tranzfort.com",
          "Business Name: TranZfort Logistics Technologies Pvt Ltd",
          "Website: https://tranzfort.com",
        ],
      },
    ],
  },
];
