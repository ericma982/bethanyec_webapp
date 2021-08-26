export default function ContactUsForm() {

    return (
        <div className="container justify-center mx-auto flex flex-col items-center">
            <form className="container mx-auto ">
                <div>
                    <label>Name</label>
                    <br />
                    <input className="border-black border-2 border-opacity-20"></input>
                </div>

                <div>
                    <label>Email</label>
                    <br />
                    <input className="border-black border-2 border-opacity-20"></input>
                </div>

                <div>
                    <label>Message</label>
                    <br />
                    <textarea className="border-black border-2 border-opacity-20 w-full"></textarea>
                </div>


                {/* Respond with friendly snippet */}
            </form>
        </div>
    )
}