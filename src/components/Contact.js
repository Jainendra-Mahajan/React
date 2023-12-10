const Contact = () => {
    return (
        <div>
            <h1 className="p-2 m-2 font-bold text-2xl">This is Contact us Page</h1>
            <form>
                <input type="text" placeholder="name" className="border border-black p-1 m-1"/>
                <input type="text" placeholder="Message" className="border border-black p-1 m-1"/>
                <button className="border border-black p-1 m-1 bg-black text-white">Submit</button>
            </form>
            
        </div>
    )
}

export default Contact;