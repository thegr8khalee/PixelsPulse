import React from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  AppleIcon,
  ArrowUpWideNarrow,
  Brush,
  ChartSpline,
  CircleDollarSign,
  ClockFading,
  Cloud,
  CloudCog,
  Code,
  Coins,
  CoinsIcon,
  Database,
  Eye,
  Globe,
  HandCoins,
  Handshake,
  Heart,
  Lightbulb,
  Lock,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  Repeat,
  Rocket,
  Search,
  Settings2Icon,
  ShieldCheck,
  TableOfContents,
  TabletSmartphone,
  ThumbsUp,
  Trophy,
  UserRound,
} from 'lucide-react';

import { usePageLoader } from '../hooks/usePageLoader';
import SEO from '../components/SEO';

const Terms = () => {
  usePageLoader([]);
  return (
    <div className='pt-16'>
      <SEO 
        title="Terms of Service | PixelsPulse"
        description="Read the terms and conditions for using PixelsPulse services and website."
      />
      <section id='Hero' className='w-full text-center'>
        <BackgroundGradientAnimation className='h-50 justify-center items-center flex flex-col space-y-2 px-2'>
          <div className='z-100 text-2xl sm:text-4xl font-bold font-[poppins]'>
            PixelsPulse.dev -
            <span className='text-primary'> Terms and Conditions</span>
          </div>
          <div className='z-100 text-sm sm:text-base font-[montserrat]'>
            <b>Last Updated:</b> July 16, 2025
          </div>
        </BackgroundGradientAnimation>
        <div className='w-full text-start items-start justify-center flex py-4'>
          <p className='px-2 font-[poppins] max-w-7xl'>
            Please read these Terms and Conditions ("Terms", "Terms and
            Conditions") carefully before using the PixelsPulse.dev website and
            engaging with our services. These Terms apply to all visitors,
            users, and others who access or use our services. By accessing or
            using the services provided by PixelsPulse.dev ("the Agency", "we",
            "us", or "our"), you agree to be bound by these Terms. If you
            disagree with any part of the terms, then you may not access our
            services.
          </p>
        </div>
      </section>
      <section className='w-full flex flex-col justify-center items-center text-start px-4 mt-6 mb-20'>
        <div className='w-full max-w-7xl'>
          <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
            1. Introduction
          </h1>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            PixelsPulse.dev is a web development and design agency specializing
            in custom web development, mobile app solutions, UI/UX design,
            branding and graphic design, landing pages and microsites,
            performance optimization, maintenance and support, and e-commerce
            solutions. These Terms govern the relationship between
            PixelsPulse.dev and its clients ("Client", "you").
          </p>
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            2. Services
          </h1>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>2.1. Scope of Work:</b> The specific services to be provided by
            PixelsPulse.dev will be detailed in a separate Project Proposal,
            Statement of Work (SOW), or Service Agreement ("Agreement") signed
            by both parties. This Agreement will outline the project scope,
            deliverables, timelines, and specific terms relevant to that
            project.
          </p>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>2.2. Changes to Scope:</b> Any changes to the agreed-upon scope
            of work must be submitted in writing by the Client and approved by
            PixelsPulse.dev. Such changes may result in adjustments to the
            project timeline and cost, which will be communicated and agreed
            upon before implementation.
          </p>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>2.3. Third-Party Services:</b> PixelsPulse.dev may recommend or
            utilize third-party services (e.g., hosting providers, stock photo
            sites, payment gateways, CMS platforms, plugins). The Client
            acknowledges that these services are subject to their own terms and
            conditions, and PixelsPulse.dev is not responsible for their
            performance or any issues arising from their use.
          </p>
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            3. Client Responsibilities
          </h1>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>3.1. Information & Content:</b> The Client is responsible for
            providing all necessary information, content (text, images, videos,
            logos, etc.), and approvals required for the project in a timely
            manner. Delays in providing content may impact project timelines and
            costs.
          </p>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>3.2. Feedback & Approvals:</b> The Client agrees to provide
            timely feedback and approvals at various stages of the project as
            outlined in the Agreement. Delays in feedback may affect project
            schedules.
          </p>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>3.3. Accuracy of Information:</b> The Client warrants that all
            information and content provided to PixelsPulse.dev is accurate,
            complete, and does not infringe upon the intellectual property or
            other rights of any third party.
          </p>
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            4. Payment Terms
          </h1>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>4.1. Fees:</b> All fees for services will be outlined in the
            Project Proposal or Agreement. Unless otherwise specified, all fees
            are quoted in [Specify Currency, e.g., USD] and are exclusive of any
            applicable taxes.
          </p>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>4.2. Payment Schedule:</b> Payment schedules will be clearly
            defined in the Agreement. Typically, projects require an upfront
            deposit, with subsequent payments tied to project milestones or a
            recurring monthly basis for ongoing services.
          </p>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>4.3. Invoicing:</b> Invoices will be issued according to the
            agreed payment schedule. Payments are due within [e.g., 7, 14, 30]
            days of the invoice date.
          </p>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>4.4. Late Payments:</b> PixelsPulse.dev reserves the right to
            charge a late payment fee of [e.g., 1.5%] per month (or the maximum
            allowed by law) on overdue balances. Services may be suspended or
            terminated for accounts with overdue payments until the balance is
            paid in full.
          </p>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>4.5. Refunds:</b> All payments made to PixelsPulse.dev are
            non-refundable once work has commenced on the respective project
            phase or service period, unless explicitly stated otherwise in a
            separate written agreement.
          </p>
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            5. Intellectual Property
          </h1>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>5.1. Client Content:</b> The Client retains all intellectual
            property rights to any content, materials, or intellectual property
            provided to PixelsPulse.dev for use in the project. The Client
            grants PixelsPulse.dev a non-exclusive, royalty-free license to use
            such content solely for the purpose of performing the agreed-upon
            services.
          </p>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>5.2. Agency Deliverables:</b> Upon full and final payment for the
            services, the Client will be granted a non-exclusive, perpetual,
            worldwide license to use the final deliverables (e.g., website code,
            final design files, completed mobile applications) for their
            intended business purposes. PixelsPulse.dev retains the right to use
            the project for its portfolio and marketing purposes.
          </p>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>5.3. Tools & Resources:</b> Any proprietary tools, templates,
            methodologies, or pre-existing code owned by PixelsPulse.dev or
            licensed from third parties, which are used in the development of
            the deliverables, remain the property of PixelsPulse.dev or their
            respective owners. These are licensed to the Client for use as part
            of the final deliverable.
          </p>
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            6. Confidentiality
          </h1>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            Both PixelsPulse.dev and the Client agree to keep confidential all
            non-public information received from the other party during the
            course of the project. This obligation of confidentiality will
            survive the termination of these Terms.
          </p>
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            7. Limitation of Liability
          </h1>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>7.1. No Guarantees:</b> PixelsPulse.dev does not guarantee
            specific results (e.g., sales, traffic, rankings) from the services
            provided. Our services are performed to the best of our ability and
            expertise.
          </p>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>7.2. Maximum Liability:</b> PixelsPulse.dev's total liability to
            the Client for any claim arising out of or relating to these Terms
            or the services provided, regardless of the form of action, shall
            not exceed the total fees paid by the Client to PixelsPulse.dev for
            the specific services directly giving rise to the claim.
          </p>
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            8. Indemnification
          </h1>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            The Client agrees to defend, indemnify and hold harmless
            PixelsPulse.dev and its licensee and licensors, and their employees,
            contractors, agents, officers and directors, from and against any
            and all claims, damages, obligations, losses, liabilities, costs or
            debt, and expenses (including but not limited to attorney's fees),
            resulting from or arising out of a) your use and access of the
            Service, by you or any person using your account and password; b) a
            breach of these Terms; or c) content posted on the Service.
          </p>
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            9. Termination
          </h1>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>9.1. Termination by Client:</b> The Client may terminate an
            Agreement by providing written notice of [e.g., 30] days. In such
            cases, the Client will be responsible for payment for all work
            completed up to the termination date, plus any non-cancellable
            third-party costs incurred by PixelsPulse.dev on behalf of the
            Client.
          </p>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>9.2. Termination by Agency:</b> PixelsPulse.dev may terminate an
            Agreement by providing written notice if the Client breaches any
            material term of these Terms or the Agreement, including but not
            limited to non-payment, failure to provide necessary
            content/feedback, or engaging in illegal activities.
          </p>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            <b>9.3. Survival:</b> Sections pertaining to Intellectual Property,
            Confidentiality, Limitation of Liability, Indemnification, Governing
            Law, and Dispute Resolution shall survive the termination of these
            Terms.
          </p>
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            10. Governing Law
          </h1>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            These Terms shall be governed and construed in accordance with the
            laws of Federal Republic of Nigeria, without regard to its conflict
            of law provisions.
          </p>
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            11. Dispute Resolution
          </h1>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            Any dispute arising out of or in connection with these Terms,
            including any question regarding its existence, validity or
            termination, shall be referred to and finally resolved by
            arbitration in Nigeria in accordance with the Relevant Arbitration
            Rules for the time being in force, which rules are deemed to be
            incorporated by reference into this clause.
          </p>
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            12. Changes to Terms
          </h1>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will try to
            provide at least 30 days' notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion. By continuing to access or use our Service after
            those revisions become effective, you agree to be bound by the
            revised terms. If you do not agree to the new terms, please stop
            using the Service.
          </p>
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            13. Contact Information
          </h1>
          <p className='px- mt-2 font-[poppins] max-w-7xl'>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul className='list-disc px-4'>
            <li>
              <b>By email:</b> <a href='mailto:info@pixelspulse.dev' className='text-primary underline hover:text-primary/80'>info@pixelspulse.dev</a>
            </li>
            <li>
              <b>By visiting this page on our website:</b>{' '}
              <a href='https://pixelspulse.dev/contact' className='text-primary underline hover:text-primary/80'>
                pixelspulse.dev/contact
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Terms;
