import { FaStar } from "react-icons/fa";

let timelineElements = [
  
    {
      id: 1,
      title: "Schedule Appointment",
   
      description:
        "Once the fee is negotiated, I will schedule appointment with the signer(s), confirm the address of the signing, and remind the signer(s) to bring their valid IDs.",
      buttonText: "View Frontend Projects",
      step: "Step 1",
      icon: "bell",
    },
    {
      id: 2,
      title: "Determine Document Receipt and Delivery Methods",

      description:
        "I can either print the unsiged loan package, get them mailed to me, or pick the documents up at a local office. Signed documents can be returned using a postal service or dropped off at a local office.",
      buttonText: "View Backend Projects",
      step: "Step 2",
      icon: "route",
    },
    {
      id: 3,
      title: "(Optional) Special Instructions or Requests",
   
      description:
        "Please let me know if there are any special instructions for trust or POA signings, scanbacks, check collection for closing costs, and etc.",
      buttonText: "Company Website",
      step: "Step 3",
      icon: "star",
    },
    {
        id: 4,
        title: "Meet & Sign",
   
        description:
          "I will meet with the signer(s) at the agreed time and place. A copy of the documents will also be given to the signer(s) for their records. If any questions arise during the signing, I will contact appropriate parties (ie. Escrow, Title, Lender).",
        buttonText: "Course Certificate",
        step: "Step 4",
        icon: "sign",
      },
      {
        id: 5,
        title: "Drop Docs",
   
        description:
          "If the signing takes place before 3 pm, the documents will be dropped off at a postal office, FedEx or UPS. I will ensure that the documents will be dropped off in a timely manner.",
        buttonText: "Course Certificate",
        step: "Step 5",
        icon: "document",
      },
      {
        id: 6,
        title: "Close",
   
        description:
          "Once documents are received and file is closed, the agreed fee is sent to me via agreed method of payment within 30 days.",
        buttonText: "Course Certificate",
        step: "Step 6",
        icon: "handshake",
      },
  ]
  
  export default timelineElements