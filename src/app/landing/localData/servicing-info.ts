
import enhancedSecurityFeaturedImage from "@/app/public/images/Enhanced Security - featured image.svg";
import seamlessIntegrationFeaturedImage from "@/app/public/images/Seamless Integration - featured image.svg";
import supportFeaturedImage from "@/app/public/images/24-7 Support - featured image.svg";
import streamlinedPaymentProcessingFeaturedImage from "@/app/public/images/Streamlined Payment Processing - featured image.svg";
import multiplePaymentOptionsFeaturedImage from "@/app/public/images/Multiple Payment Options - featured image.svg";


export class ServicingInfo {
  l1Data() {
    return [
      {
        title: "Enhanced Security",
        description: "Rest assured that your financial data is protected by Radix&apos;s robust security measures.",
        featuredImage: enhancedSecurityFeaturedImage,
        group: 'l1'
      },
      {
        title: "Seamless Integration",
        description: "Integrate Radix's API into your platform to accept payments effortlessly.",
        featuredImage: seamlessIntegrationFeaturedImage,
        group: 'l1'
      },
      {
        title: "24/7 Support",
        description: "Our dedicated support team is always available to assist you with any queries or issues.",
        featuredImage: supportFeaturedImage,
        group: 'l1'
      }
    ]
  }
  l2Data() {
    return [
      {
        title: "Streamlined Payment Processing",
        description: "Experience effortless payment acceptance with Radix's intuitive platform.",
        featuredImage: streamlinedPaymentProcessingFeaturedImage,
        group: 'l2'
      },
      {
        title: "Multiple Payment Options",
        description: "Cater to your customers' preferences by offering a variety of payment methods, including cards, banktransfers, and USSD.",
        featuredImage: multiplePaymentOptionsFeaturedImage,
        group: 'l2'
      }
    ]
  }
}