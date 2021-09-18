import ContactUsForm from "../components/Contact-Us-Form"

export default function Contact() {

    return (
        /*
        Form:
            Name
            Email
            Message
            Friendly Snippet Modal (Thank you so much for filling out our form, one of our welcoming team members should contact you very soon! Have a blessed day!)
        */
        <div className="h-screen">
            <ContactUsForm />
        </div>
    )
}