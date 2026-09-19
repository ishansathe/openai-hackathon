import { useId, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeIndianRupee,
  Check,
  CircleHelp,
  FileClock,
  FilePenLine,
  FileText,
  History,
  Lightbulb,
  Menu,
  PhoneCall,
  QrCode,
  ShieldCheck,
  Upload,
  Zap,
  X,
} from "lucide-react";
import { premiseRequirements } from "./changeNameRequirements.js";

const bill = {
  name: "Priya Sharma",
  month: "August 2026",
  amount: "₹1,248.00",
  dueDate: "12 September 2026",
};
const services = [
  {
    title: "Pay my bill",
    detail: "Pay your electricity bill using UPI.",
    icon: BadgeIndianRupee,
    flow: "consumer",
  },
  {
    title: "Change name on bill",
    detail: "Request a change to the name shown on your electricity bill.",
    icon: FilePenLine,
    flow: "name-consumer",
  },
];
const views = [
  {
    title: "View billing history",
    detail: "View your previous electricity bills and payments.",
    icon: History,
    flow: "history-login",
  },
  {
    title: "View application status",
    detail: "Check the status of your service requests.",
    icon: FileClock,
    flow: "application-status-login",
  },
];
const paymentHistory = [
  [
    "August 2026",
    "Online",
    "₹1,842",
    "28 Aug 2026",
    "29 Aug 2026",
    "UPI123456789",
  ],
  [
    "July 2026",
    "Online",
    "₹1,716",
    "29 Jul 2026",
    "29 Jul 2026",
    "UPI982374615",
  ],
  [
    "June 2026",
    "Cash at BEST collection centre",
    "₹1,638",
    "27 Jun 2026",
    "27 Jun 2026",
  ],
  [
    "May 2026",
    "Online",
    "₹1,754",
    "28 May 2026",
    "29 May 2026",
    "UPI764391208",
  ],
  [
    "April 2026",
    "Online",
    "₹1,592",
    "26 Apr 2026",
    "26 Apr 2026",
    "UPI436190572",
  ],
  [
    "March 2026",
    "Cash at BEST collection centre",
    "₹1,687",
    "27 Mar 2026",
    "27 Mar 2026",
  ],
  [
    "February 2026",
    "Online",
    "₹1,921",
    "27 Feb 2026",
    "28 Feb 2026",
    "UPI583027146",
  ],
  [
    "January 2026",
    "Online",
    "₹2,146",
    "29 Jan 2026",
    "29 Jan 2026",
    "UPI319845762",
  ],
  [
    "December 2025",
    "Cash at BEST collection centre",
    "₹2,238",
    "29 Dec 2025",
    "29 Dec 2025",
  ],
  [
    "November 2025",
    "Online",
    "₹1,986",
    "27 Nov 2025",
    "28 Nov 2025",
    "UPI742618093",
  ],
  [
    "October 2025",
    "Online",
    "₹1,768",
    "28 Oct 2025",
    "28 Oct 2025",
    "UPI168409275",
  ],
  [
    "September 2025",
    "Cash at BEST collection centre",
    "₹1,652",
    "26 Sep 2025",
    "26 Sep 2025",
  ],
  [
    "August 2025",
    "Online",
    "₹1,804",
    "28 Aug 2025",
    "29 Aug 2025",
    "UPI926374850",
  ],
  [
    "July 2025",
    "Online",
    "₹1,695",
    "29 Jul 2025",
    "29 Jul 2025",
    "UPI503817294",
  ],
  [
    "June 2025",
    "Cash at BEST collection centre",
    "₹1,624",
    "27 Jun 2025",
    "27 Jun 2025",
  ],
  [
    "May 2025",
    "Online",
    "₹1,737",
    "28 May 2025",
    "28 May 2025",
    "UPI671245938",
  ],
  [
    "April 2025",
    "Online",
    "₹1,575",
    "26 Apr 2025",
    "27 Apr 2025",
    "UPI814320659",
  ],
  [
    "March 2025",
    "Cash at BEST collection centre",
    "₹1,663",
    "27 Mar 2025",
    "27 Mar 2025",
  ],
].map(([month, mode, amount, paymentDate, confirmationDate, paymentId]) => ({
  month,
  mode,
  amount,
  paymentDate,
  confirmationDate,
  paymentId,
}));
const connectionUses = [
  "Residential",
  "Religious",
  "Charitable",
  "Crematorium",
  "Educational",
  "Hospital",
  "Commercial",
  "Industrial",
  "IT industries",
  "Advertisement",
  "Public sanitary",
  "Garden",
  "Stand by supply",
  "Others",
  "Construction",
  "Ganpati festival",
];
const API_BASE_URL = import.meta.env.VITE_ENVIRONMENT == "local"
  ? import.meta.env.VITE_API_LOCAL
  : import.meta.env.VITE_API_PROD;
  
function Header({ home }) {
  return (
    <header className="site-header">
      <button className="brand" onClick={home}>
        <span className="brand-mark">
          <Zap size={23} fill="currentColor" />
        </span>
        <span>
          <strong>SarvaJana</strong>
          <small>Electric Supply</small>
        </span>
      </button>
      <nav>
        <button className="active" onClick={home}>
          Services
        </button>
        <a href="#help">Help & support</a>
      </nav>
      <button className="menu-button">
        <Menu size={23} />
      </button>
    </header>
  );
}
function Card({ item, tone, open }) {
  const Icon = item.icon;
  return (
    <button
      className={`service-card ${tone}`}
      onClick={() => item.flow && open(item.flow)}
    >
      <span className="icon-wrap">
        <Icon size={27} />
      </span>
      <span className="card-copy">
        <strong>{item.title}</strong>
        <small>{item.detail}</small>
      </span>
      <ArrowRight className="arrow" size={21} />
    </button>
  );
}
function Detail({ label, value }) {
  return (
    <div className="detail-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
function Qr() {
  const r = [
    "1111111000101",
    "1000001011101",
    "1011101000101",
    "1011101011101",
    "1011101000101",
    "1000001010101",
    "1111111010101",
    "0000000011100",
    "1101011110011",
    "0011100011010",
    "1110011010111",
    "1001110101001",
    "1111001110101",
  ];
  return (
    <div className="qr">
      {r.map((row, y) =>
        [...row].map((c, x) => (
          <i key={`${y}${x}`} className={c === "1" ? "filled" : ""} />
        )),
      )}
    </div>
  );
}
function BackPage({ back, step, title, desc, children, className = "" }) {
  return (
    <>
      <Header home={back} />
      <main className={`flow-wrap ${className}`}>
        <button className="back-link" onClick={back}>
          <ArrowLeft size={18} /> Back to services
        </button>
        <section className="flow-card">
          {step && <p className="step-label">{step}</p>}
          <h1>{title}</h1>
          {desc && <p className="flow-description">{desc}</p>}
          {children}
        </section>
      </main>
    </>
  );
}
function Notice({ children, className = "" }) {
  return (
    <div className={`notice ${className}`}>
      <Lightbulb size={20} />
      <p>{children}</p>
    </div>
  );
}
function Consumer({ number, setNumber, next, back }) {
  const valid = number.length > 5;
  return (
    <BackPage
      back={back}
      step="Step 1 of 3"
      title="Find your electricity bill"
      desc="Enter the consumer number printed on your electricity bill to view the amount due."
    >
      <form
        className="lookup-form"
        onSubmit={(e) => {
          e.preventDefault();
          valid && next();
        }}
      >
        <label>Consumer number</label>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="For example, 1345897612"
        />
        <p className="field-help">
          Your consumer number is available at the top of your electricity bill.
        </p>
        <button className="primary-button" disabled={!valid}>
          Continue <ArrowRight size={18} />
        </button>
      </form>
      <p className="secure-note">
        <ShieldCheck size={17} /> Your account information is protected and used
        only to retrieve your bill.
      </p>
    </BackPage>
  );
}
function Pay({ number, reference, setReference, next, back }) {
  const valid = reference.length > 5;
  return (
    <BackPage
      back={back}
      step="Step 2 of 3"
      title="Pay your bill"
      desc="Review your bill details and make your payment using any UPI app."
    >
      <Notice>
        <strong>Payment confirmation may take 3–5 business days.</strong> After
        making your payment, enter the payment reference number below. Your bill
        will be updated after the payment is confirmed.
      </Notice>
      <section className="payment-section">
        <h2>Bill details</h2>
        <div className="detail-list">
          <Detail label="Consumer name" value={bill.name} />
          <Detail label="Consumer number" value={number} />
          <Detail label="Bill month" value={bill.month} />
          <Detail label="Bill amount" value={bill.amount} />
          <Detail label="Due date" value={bill.dueDate} />
        </div>
      </section>
      <section className="payment-section make-payment">
        <h2>Make payment</h2>
        <p>Scan the QR code using any UPI app.</p>
        <div className="qr-box">
          <Qr />
          <span>
            <QrCode size={18} /> UPI payment
          </span>
        </div>
      </section>
      <form
        className="reference-form"
        onSubmit={(e) => {
          e.preventDefault();
          valid && next();
        }}
      >
        <label>Payment reference number</label>
        <input
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          placeholder="Enter UPI reference number"
        />
        <p className="field-help">
          Enter the reference number shown in your UPI app after completing the
          payment.
        </p>
        <button className="primary-button" disabled={!valid}>
          Confirm payment <ArrowRight size={18} />
        </button>
      </form>
    </BackPage>
  );
}
function PaySuccess({ number, reference, home }) {
  return (
    <div className="flow-wrap success-wrap">
      <div className="success-card">
        <span className="success-icon">
          <Check size={32} />
        </span>
        <p className="step-label">PAYMENT SUBMITTED</p>
        <h1>Payment submitted</h1>
        <p className="success-copy">
          Your payment reference number has been recorded.
        </p>
        <div className="receipt">
          <Detail label="Consumer name" value={bill.name} />
          <Detail label="Consumer number" value={number} />
          <Detail label="Amount" value={bill.amount} />
          <Detail label="Submitted on" value="29 August 2026" />
          <Detail label="Payment reference number" value={reference} />
        </div>
        <Notice className="receipt-notice">
          Your payment may take <strong>3–5 business days</strong> to appear in
          your billing records.
        </Notice>
        <button className="primary-button return-button" onClick={home}>
          Return to home <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
function HistoryLogin({ number, setNumber, next, back }) {
  const [password, setPassword] = useState("");
  const valid = number.length > 5 && password.length > 0;
  return (
    <BackPage
      back={back}
      title="View Billing History"
      desc="Enter your BEST Consumer Number and password to view your payment history."
      className="history-flow"
    >
      <form
        className="lookup-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (valid) next();
        }}
      >
        <label>Consumer Number</label>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter consumer number"
          inputMode="numeric"
        />
        <label className="history-password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
        />
        <button className="primary-button" disabled={!valid}>
          Continue <ArrowRight size={18} />
        </button>
      </form>
    </BackPage>
  );
}
function PaymentRecord({ payment }) {
  return (
    <article className="payment-record">
      <div className="payment-record-top">
        <h3>{payment.month}</h3>
        <span className="payment-status">Paid</span>
      </div>
      <div className="payment-record-main">
        <strong>{payment.amount}</strong>
        <span>{payment.mode}</span>
      </div>
      <div className="payment-record-meta">
        <div>
          <span>Payment Date</span>
          <strong>{payment.paymentDate}</strong>
        </div>
        <div>
          <span>Confirmation Date</span>
          <strong>{payment.confirmationDate}</strong>
        </div>
      </div>
      {payment.paymentId && (
        <div className="payment-id">
          <span>Submitted Payment ID</span>
          <strong>{payment.paymentId}</strong>
        </div>
      )}
    </article>
  );
}
function BillingHistory({ number, back }) {
  return (
    <>
      <Header home={back} />
      <main className="flow-wrap history-flow">
        <button className="back-link" onClick={back}>
          <ArrowLeft size={18} /> Back to services
        </button>
        <section className="history-account">
          <div>
            <span>Consumer Name</span>
            <strong>Priya Sharma</strong>
          </div>
          <div>
            <span>Consumer Number</span>
            <strong>{number || "1345897612"}</strong>
          </div>
        </section>
        <section className="security-deposit">
          <h2>Security Deposit</h2>
          <div className="security-deposit-details">
            <div>
              <span>Current Security Deposit</span>
              <strong>₹1,735</strong>
            </div>
            <p>
              <strong>Paid On:</strong> 15 June 2022
            </p>
            <p>
              <strong>Payment Mode:</strong> Cash at BEST collection centre
            </p>
          </div>
        </section>
        <section className="history-section">
          <h1>Billing History</h1>
          <p>Showing payments from the last 18 months.</p>
          <div className="payment-record-list">
            {paymentHistory.map((payment) => (
              <PaymentRecord payment={payment} key={payment.month} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

const applications = [
  {
    number: "NC202610293847",
    type: "Name Change",
    date: "27 Aug 2026",
    status: "Verifying Documents",
  },
  {
    number: "SD202608174326",
    type: "Security Deposit Transfer",
    date: "17 Aug 2026",
    status: "Payment Confirmation Pending",
  },
  {
    number: "NC202607092518",
    type: "Name Change",
    date: "09 Jul 2026",
    status: "Updating Name",
  },
  {
    number: "NC202606010827",
    type: "Name Change",
    date: "01 Jun 2026",
    status: "Completed",
  },
  {
    number: "NC202605221409",
    type: "Name Change",
    date: "22 May 2026",
    status: "Rejected",
  },
];
function ApplicationStatusLogin({ number, setNumber, next, back }) {
  const [password, setPassword] = useState("");
  const valid = number.length > 5 && password.length > 0;
  return (
    <BackPage
      back={back}
      title="Application Status"
      className="application-login"
    >
      <form
        className="lookup-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (valid) next();
        }}
      >
        <label>Consumer Number</label>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter consumer number"
          inputMode="numeric"
        />
        <label className="history-password">Consumer Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter consumer password"
        />
        <button className="primary-button" disabled={!valid}>
          Submit
        </button>
      </form>
    </BackPage>
  );
}
function ApplicationCard({ application }) {
  const rejected = application.status === "Rejected";
  const statusClass = application.status.toLowerCase().replaceAll(" ", "-");
  return (
    <article className="application-card">
      <div className="application-card-heading">
        <span>Application Number</span>
        <h2>{application.number}</h2>
      </div>
      <div className="application-type">
        <strong>{application.type}</strong>
        <span>Filed on {application.date}</span>
      </div>
      <div className="application-status">
        <span>Status of Application</span>
        <strong className={statusClass}>{application.status}</strong>
        {rejected && (
          <p>Visit the office for clarification or to resolve the issue.</p>
        )}
      </div>
      <button className="undertaking-button">
        <FileText size={17} /> View Letter of Undertaking
      </button>
    </article>
  );
}
function MyApplications({ number, back }) {
  return (
    <>
      <Header home={back} />
      <main className="flow-wrap applications-flow">
        <button className="back-link" onClick={back}>
          <ArrowLeft size={18} /> Back to services
        </button>
        <section className="application-account">
          <div>
            <span>Consumer Name</span>
            <strong>Priya Sharma</strong>
          </div>
          <div>
            <span>Consumer Number</span>
            <strong>{number || "1345897612"}</strong>
          </div>
        </section>
        <section className="applications-section">
          <h1>My Applications</h1>
          <div className="application-list">
            {applications.map((application) => (
              <ApplicationCard
                application={application}
                key={application.number}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function FileUpload({ compact = false, accept, onFileChange }) {
  const [file, setFile] = useState(null);
  const id = useId();
  const changeFile = (file) => {
    setFile(file);
    onFileChange?.(file);
  };
  return (
    <div className="file-upload">
      <input
        className="file-input"
        id={id}
        type="file"
        accept={accept}
        onChange={(e) => changeFile(e.target.files?.[0] || null)}
      />
      <label
        className={compact ? "upload-button" : "outline-button"}
        htmlFor={id}
      >
        <Upload size={15} /> {compact ? "Upload" : "Upload document"}
      </label>
      {file && (
        <span className="uploaded">
          <Check size={15} />
          <b>{file.name}</b>
          <small>{formatFileSize(file.size)} · Uploaded</small>
        </span>
      )}
    </div>
  );
}
function Requirement({ node, level = 0 }) {
  if (node.type === "document")
    return (
      <div className="doc-item">
        <strong>{node.label}</strong>
        {node.constraints?.map((c) => (
          <small key={c}>{c}</small>
        ))}
        <FileUpload compact />
      </div>
    );
  if (node.type === "and")
    return (
      <div className="requirement-group and-group">
        <p className="group-label">You need both of these</p>
        {node.items.map((n, i) => (
          <Requirement node={n} key={i} level={level + 1} />
        ))}
      </div>
    );
  if (node.type === "or")
    return (
      <div className="requirement-options">
        <p className="group-label">Provide any one of these</p>
        {node.items.map((n, i) => (
          <div className="option-wrap" key={i}>
            <Requirement node={n} level={level + 1} />
            {i < node.items.length - 1 && <span className="or-label">OR</span>}
          </div>
        ))}
      </div>
    );
  if (node.type === "preferred")
    return (
      <div className="preferred-wrap">
        <div className="preferred-card">
          <p className="group-label preferred-label">Preferred document</p>
          <Requirement node={node.primary} level={level + 1} />
        </div>
        <p className="fallback-label">Don’t have this? You can submit:</p>
        <Requirement node={node.fallback} level={level + 1} />
      </div>
    );
  return null;
}
function UploadCard({ title, accept, onFileChange }) {
  return (
    <div className="upload-card">
      <Upload size={20} />
      <strong>{title}</strong>
      <FileUpload accept={accept} onFileChange={onFileChange} />
    </div>
  );
}
function CalculationModal({ close }) {
  const [unlocked, setUnlocked] = useState(false);
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <button className="close-button" onClick={close} aria-label="Close">
          <X size={20} />
        </button>
        <h2>View security deposit calculation</h2>
        {!unlocked ? (
          <>
            <p>Enter your consumer password to view your billing history.</p>
            <label>Consumer password</label>
            <input type="password" placeholder="Enter consumer password" />
            <button
              className="primary-button"
              onClick={() => setUnlocked(true)}
            >
              View billing history
            </button>
          </>
        ) : (
          <>
            <p className="modal-intro">Last 12 months</p>
            <div className="history-table">
              <Detail label="Aug 2026" value="₹1,820" />
              <Detail label="Jul 2026" value="₹1,640" />
              <Detail label="Jun 2026" value="₹1,755" />
              <Detail label="May 2026" value="₹1,725" />
            </div>
            <strong className="average">12-month average: ₹1,735</strong>
          </>
        )}
      </div>
    </div>
  );
}
function NameConsumer({ number, setNumber, next, back }) {
  return (
    <BackPage back={back} step="Step 1 of 4" title="Change name on bill">
      <Notice>
        <strong>Already submitted an application?</strong>
        <br />
        Please do not submit another application. It can take up to{" "}
        <strong>2 months</strong> for your name to appear on your electricity
        bill.
      </Notice>
      <form
        className="lookup-form"
        onSubmit={(e) => {
          e.preventDefault();
          number.length > 5 && next();
        }}
      >
        <label>Consumer number</label>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter consumer number"
        />
        <p className="field-help">
          Enter the consumer number shown on your electricity bill.
        </p>
        <button className="primary-button" disabled={number.length < 6}>
          Continue <ArrowRight size={18} />
        </button>
      </form>
    </BackPage>
  );
}
function Deposit({ next, back }) {
  const [choice, setChoice] = useState("no");
  const transfer = choice === "yes";
  return (
    <BackPage
      back={back}
      step="Step 2 of 4"
      title="Security deposit"
      desc="Do you want to transfer the existing security deposit to the new consumer?"
    >
      <label className="radio-card">
        <input
          type="radio"
          checked={transfer}
          onChange={() => setChoice("yes")}
        />
        <span>
          <strong>Yes, transfer the security deposit</strong>
          <small>
            Security deposit transfer is currently handled offline. Please visit
            your local BEST office to complete this process.
          </small>
          <small>
            {" "}
            Note: Security Deposit transfer is NOT POSSIBLE without Security
            Deposit Receipt
          </small>
        </span>
      </label>
      <label className="radio-card">
        <input
          type="radio"
          checked={!transfer}
          onChange={() => setChoice("no")}
        />
        <span>
          <strong>No, I do not want to transfer the security deposit</strong>
        </span>
      </label>
      <button
        className="primary-button step-button"
        onClick={transfer ? back : next}
      >
        {transfer ? "Return home" : "Continue"}{" "}
        {transfer ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
      </button>
    </BackPage>
  );
}
function NameApplication({ next, back, consumerAccountNumber, nameChangeData, updateNameChangeData }) {
  const [premise, setPremise] = useState("ownership"),
    [use, setUse] = useState("Residential"),
    [calc, setCalc] = useState(false),
    [submitting, setSubmitting] = useState(false),
    [error, setError] = useState("");
  const selected = premiseRequirements.find((x) => x.value === premise);
  const submit = async (event) => {
    event.preventDefault();

    /**
     * new FormData(event.currentTarget)
     * will auto-fill all input element values in the FormData object.
     * The catch is that the property names follow the 'name' of the input element. 
     * In this file, they are present, so we're safe! Keep a check on future ones!
     */
    const form = new FormData(event.currentTarget);
    if (!nameChangeData.passportPhoto || !nameChangeData.signature) {
      setError(
        "Please upload both your passport-size photograph and signature.",
      );
      return;
    }
    
    // Appends the 'passport Photo' and 'signature' fields to the formData, 
    // because they aren't directly inside the form element
    // They are actually inside a chain of components, so they're not auto-added.
    form.append("passportPhoto", nameChangeData.passportPhoto);
    form.append("signature", nameChangeData.signature);
    for (const [key, value] of form.entries()) {
      console.log(key, value);
    }

    setSubmitting(true);
    setError("");
    next();
    return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/generate-undertaking`, {
        method: "POST",
        body: form,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success !== true)
        throw new Error(
          result.message ||
            result.error ||
            "We could not submit your application. Please try again.",
        );
      const { applicationNumber, requisitionNumber } = result;
      if (!applicationNumber || !requisitionNumber)
        throw new Error(
          "The server did not return an application and requisition number.",
        );
      next({ applicationNumber, requisitionNumber });
    } catch (requestError) {
      setError(
        requestError.message ||
          "We could not submit your application. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <BackPage
      back={back}
      step="Step 3 of 4"
      title="Application details"
      desc="Provide your details, supporting documents, and payment reference to submit your request."
    >
      {calc && <CalculationModal close={() => setCalc(false)} />}
      <form onSubmit={submit}>
        <input
          type="hidden"
          name="consumerAccountNumber"
          value={consumerAccountNumber}
        />
        <section className="form-section">
          <h2>Your details</h2>
          <div className="form-grid">
            <label>
              Name
              <input name="name" value={nameChangeData.name} required onChange={(e) => {updateNameChangeData('name', e.target.value)}}/>
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                required
                value={nameChangeData.email}
                onChange={(e) => updateNameChangeData('email', e.target.value)}
              />
            </label>
            <label>
              Mobile number
              <input
                name="contactNumber"
                inputMode="tel"
                placeholder="Enter mobile number"
                required
                value={nameChangeData.mobile}
                onChange={(e) => updateNameChangeData('mobile', e.target.value)}
              />
            </label>
          </div>
        </section>
        <section className="form-section">
          <h2>Your address</h2>
          <div className="form-grid">
            <label>
              Building & flat number
              <input name="buildingFlat" required 
              value={nameChangeData.buildingFlat} onChange={(e) => updateNameChangeData('buildingFlat', e.target.value)}/>
            </label>
            <label>
              Street name
              <input name="streetName" required 
              value={nameChangeData.streetName} onChange={(e) => updateNameChangeData('streetName', e.target.value)}/>
            </label>
            <label>
              City
              <input name="city" required 
              value={nameChangeData.city} onChange={(e) => updateNameChangeData('city', e.target.value)}/>
            </label>
            <label>
              Pincode
              <input name="pincode" inputMode="numeric" required 
              value={nameChangeData.pincode} onChange={(e) => updateNameChangeData('pincode', e.target.value)}/>
            </label>
          </div>
        </section>
        <section className="form-section">
          <h2>Documents for your application</h2>
          <div className="upload-grid">
            <UploadCard
              title="Passport size photograph"
              accept="image/*"
              onFileChange={(file) => updateNameChangeData('passportPhoto', file)}
            />
            <UploadCard
              title="Signature"
              accept="image/*"
              onFileChange={(file) => updateNameChangeData('signature', file)}
            />
          </div>
          <p className="field-help">
            Your photograph and signature will be used to prepare the Letter of
            Undertaking automatically.
          </p>
        </section>
        <section className="form-section">
          <h2>About your electricity service</h2>
          <div className="form-grid">
            <label>
              What is the connection used for?
              <select value={use} onChange={(e) => setUse(e.target.value)}>
                {connectionUses.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            {use === "Residential" && (
              <label>
                Type of residence
                <select>
                  <option>Apartment</option>
                  <option>Independent house</option>
                  <option>Chawl</option>
                </select>
              </label>
            )}
            <label>
              <span className="field-label">
                Ward Identifier{" "}
                <span className="tooltip" tabIndex="0">
                  <CircleHelp size={15} />
                  <span role="tooltip">
                    The ward identifier can be found on the latest electricity
                    bill.
                  </span>
                </span>
              </span>
              <select name="wardId" defaultValue="" value={nameChangeData.wardIdentifier}
              onChange={(e)=> updateNameChangeData('wardIdentifier', e.target.value)} required>
                <option value="" disabled>
                  Select ward identifier
                </option>
                {["A", "B", "C", "D", "E", "G/S", "G/N"].map((ward) => (
                  <option key={ward}>{ward}</option>
                ))}
              </select>
            </label>
            <label>
              <span className="field-label">
                Meter No.{" "}
                <span className="tooltip" tabIndex="0">
                  <CircleHelp size={15} />
                  <span role="tooltip">
                    You can find your meter number on your latest electricity
                    bill
                  </span>
                </span>
              </span>
              <input
                name="meterNumber"
                type="text"
                placeholder="Enter meter number"
                required
                value={nameChangeData.meterNumber}
                onChange={(e) => updateNameChangeData('meterNumber', e.target.value)}
              />
            </label>
            <label className="full-field">
              More details (optional)
              <input />
            </label>
          </div>
        </section>
        <section className="form-section">
          <h2>Prove your entitlement to the connection</h2>
          <label>
            Type of premise
            <select
              value={premise}
              onChange={(e) => setPremise(e.target.value)}
            >
              {premiseRequirements.map((x) => (
                <option value={x.value} key={x.value}>
                  {x.label}
                </option>
              ))}
            </select>
          </label>
          <div className="requirements">
            <Requirement node={selected.requirement} />
          </div>
        </section>
        <section className="form-section">
          <h2>Common documents</h2>
          <div className="upload-grid">
            <UploadCard title="Your identity — Aadhaar Card or PAN Card" />
            <UploadCard title="Your connection — Latest paid electricity bill" />
          </div>
        </section>
        <section className="form-section charges">
          <h2>Pay the required charges</h2>
          <Detail label="Requisition fee" value="₹150" />
          <Detail label="New security deposit" value="₹1,735" />
          <p>
            Based on the average of the electricity bills for this consumer
            number over the past 12 months.
          </p>
          <button
            type="button"
            className="text-button"
            onClick={() => setCalc(true)}
          >
            View calculation
          </button>
          <Detail label="Total" value="₹1,885" />
          <p>Scan the QR code using any UPI app.</p>
          <div className="qr-box">
            <Qr />
            <span>
              <QrCode size={18} /> UPI payment
            </span>
          </div>
          <label className="payment-id">
            Payment reference ID
            <input placeholder="Enter payment reference ID" />
          </label>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <button className="primary-button" disabled={submitting}>
            {submitting ? "Submitting…" : "Submit application"}{" "}
            <ArrowRight size={18} />
          </button>
          <p className="field-help">
            Your payment reference will be recorded with this application.
          </p>
        </section>
      </form>
    </BackPage>
  );
}
function NameSuccess({ documentNumbers, home, nameChangeData, number }) {
  const [downloading, setDownloading] = useState(false),
    [error, setError] = useState("");
  const downloadUndertaking = async () => {
    setDownloading(true);
    setError("");

    try {
      const form = new FormData();

      // Generated document numbers
      form.append(
        "applicationNumber",
        documentNumbers.applicationNumber,
      );

      form.append(
        "requisitionNumber",
        documentNumbers.requisitionNumber,
      );

      // Consumer Account Number
      form.append("consumerAccountNumber", number);

      // Application information
      form.append("name", nameChangeData.name);
      form.append("email", nameChangeData.email);
      form.append("contactNumber", nameChangeData.mobile);
      form.append("buildingFlat", nameChangeData.buildingFlat);
      form.append("streetName", nameChangeData.streetName);
      form.append("city", nameChangeData.city);
      form.append("pincode", nameChangeData.pincode);
      form.append("wardId", nameChangeData.wardIdentifier);
      form.append("meterNumber", nameChangeData.meterNumber);

      // Uploaded files
      form.append("passportPhoto", nameChangeData.passportPhoto);
      form.append("signature", nameChangeData.signature);

      const response = await fetch(
        `${API_BASE_URL}/api/undertaking`,
        {
          method: "POST",
          body: form,
        },
      );

      if (!response.ok)
        throw new Error(
          "We could not download the Letter of Undertaking. Please try again.",
        );

      const file = await response.blob();

      const url = URL.createObjectURL(file);
      const link = document.createElement("a");

      link.href = url;
      link.download = `letter-of-undertaking-${documentNumbers.applicationNumber}.pdf`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(url);
    } catch (downloadError) {
      setError(
        downloadError.message ||
          "We could not download the Letter of Undertaking. Please try again.",
      );
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="flow-wrap success-wrap">
      <div className="success-card">
        <span className="success-icon">
          <Check size={32} />
        </span>
        <p className="step-label">APPLICATION SUBMITTED</p>
        <h1>Application submitted</h1>
        <p className="success-copy">
          Your payment has been received and your application has been
          submitted.
        </p>
        <div className="receipt">
          <Detail
            label="Application number"
            value={documentNumbers.applicationNumber}
          />
          <Detail
            label="Requisition number"
            value={documentNumbers.requisitionNumber}
          />
        </div>
        <Notice className="receipt-notice">
          Your Letter of Undertaking has been generated automatically using the
          information provided in your application.
        </Notice>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <button
          className="outline-button undertaking"
          onClick={downloadUndertaking}
          disabled={downloading}
        >
          {downloading ? "Downloading…" : "View Letter of Undertaking"}
        </button>
        <section className="next-steps">
          <h2>What happens next?</h2>
          <p>
            Your name may take up to <strong>2 months</strong> to appear on your
            electricity bill.
          </p>
          <p>
            <strong>Please do not pay the next month’s bill.</strong> Pay the
            bills for both months together in the following month.
          </p>
          <p>
            You can check the status of your application from{" "}
            <strong>My Applications</strong>.
          </p>
        </section>
        <button className="primary-button return-button" onClick={home}>
          Return to home <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
function Home({ open }) {
  return (
    <main>
      <Header home={() => {}} />
      <section className="hero">
        <p className="eyebrow">
          <Lightbulb size={16} /> ELECTRICITY SERVICES, MADE SIMPLER
        </p>
        <h1>
          Electricity services
          <br />
          <em>all in one place.</em>
        </h1>
        <p className="hero-copy">
          Pay your bill, manage your electricity connection, and check your
          service requests online.
        </p>
      </section>
      <section className="services">
        <section className="service-panel blue">
          <div className="panel-intro">
            <p>What do you want to do?</p>
            <h2>Quick services</h2>
            <span>
              Complete common electricity services securely in a few simple
              steps.
            </span>
          </div>
          <div className="card-stack">
            {services.map((x) => (
              <Card item={x} tone="blue" open={open} key={x.title} />
            ))}
          </div>
        </section>
        <section className="service-panel green">
          <div className="panel-intro">
            <p>What do you want to check?</p>
            <h2>Track & review</h2>
            <span>
              Look up your records and keep track of requests already submitted.
            </span>
          </div>
          <div className="card-stack">
            {views.map((x) => (
              <Card item={x} tone="green" open={open} key={x.title} />
            ))}
          </div>
        </section>
      </section>
      <section className="help-strip" id="help">
        <span className="help-icon">
          <PhoneCall size={20} />
        </span>
        <div>
          <strong>Need help with a service?</strong>
          <span>Our support team is here to assist you.</span>
        </div>
        <a href="tel:1912">
          Contact support <ArrowRight size={17} />
        </a>
      </section>
      <footer>
        © 2026 SarvaJana Electric Supply. A public utility service portal.
      </footer>
    </main>
  );
}
export default function App() {
  const [screen, setScreen] = useState("home"),
    [number, setNumber] = useState(""),
    [reference, setReference] = useState(""),
    [documentNumbers, setDocumentNumbers] = useState(null);
  const home = () => setScreen("home");

  const [nameChangeData, setNameChangeData] = useState({
    name: "Priya Sharma",
    email: "",
    mobile: "",
    buildingFlat: "",
    streetName: "",
    city: "",
    pincode: "",
    passportPhoto: null,
    signature: null,
    wardIdentifier: "",
    meterNumber: "",
  });

  function updateNameChangeData(field, value) {
    setNameChangeData(prev => ({
      ...prev,
      [field]: value
    }));
  }

  function generateAppReqNumbers() {

    const now = new Date();

    const timestamp =
        now.getFullYear().toString() +
        String(now.getMonth() + 1).padStart(2, "0") +
        String(now.getDate()).padStart(2, "0") +
        String(now.getHours()).padStart(2, "0") +
        String(now.getMinutes()).padStart(2, "0") +
        String(now.getSeconds()).padStart(2, "0");

    const randomReq =
        Math.floor(1000 + Math.random() * 9000);
    const randomApp = 
        Math.floor(1000 + Math.random() * 9000);

    const requisitionNumber =  `REQ-${timestamp}-${randomReq}`;
    const applicationNumber = `APP-${timestamp}-${randomApp}`;

    return ({requisitionNumber, applicationNumber});
  }

  if (screen === "consumer")
    return (
      <Consumer
        number={number}
        setNumber={setNumber}
        next={() => setScreen("pay")}
        back={home}
      />
    );
  if (screen === "pay")
    return (
      <Pay
        number={number}
        reference={reference}
        setReference={setReference}
        next={() => setScreen("pay-success")}
        back={() => setScreen("consumer")}
      />
    );
  if (screen === "pay-success")
    return <PaySuccess number={number} reference={reference} home={home} />;
  if (screen === "history-login")
    return (
      <HistoryLogin
        number={number}
        setNumber={setNumber}
        next={() => setScreen("billing-history")}
        back={home}
      />
    );
  if (screen === "billing-history")
    return <BillingHistory number={number} back={home} />;
  if (screen === "application-status-login")
    return (
      <ApplicationStatusLogin
        number={number}
        setNumber={setNumber}
        next={() => setScreen("my-applications")}
        back={home}
      />
    );
  if (screen === "my-applications")
    return <MyApplications number={number} back={home} />;
  if (screen === "name-consumer")
    return (
      <NameConsumer
        number={number}
        setNumber={setNumber}
        next={() => setScreen("deposit")}
        back={home}
      />
    );
  if (screen === "deposit")
    return (
      <Deposit
        next={() => setScreen("name-application")}
        back={() => setScreen("name-consumer")}
      />
    );
  if (screen === "name-application")
    return (
      <NameApplication
        consumerAccountNumber={number}
        next={() => {
          setDocumentNumbers(generateAppReqNumbers());
          setScreen("name-success");
        }}
        back={() => setScreen("deposit")}
        nameChangeData={nameChangeData}
        updateNameChangeData={updateNameChangeData}
      />
    );
  if (screen === "name-success" && documentNumbers)
    return <NameSuccess documentNumbers={documentNumbers} home={home} nameChangeData={nameChangeData} number={number}/>;
  return <Home open={setScreen} />;
}
