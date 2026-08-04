import BillingDetails from "../components/BillingDetails/BillingDetails";
import ContactMap from "../components/ContactMap/ContactMap";
import ContactPersons from "../components/ContactPersons/ContactPersons";
import ContactSection from "../components/Contacts/Contacts";

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <ContactPersons />
      <ContactMap />
      <BillingDetails />
    </>
  );
}
