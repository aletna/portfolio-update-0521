const Footer = () => {
    return (
        <div style={{position:'absolute',bottom:0, height:'5rem'}} className="border-t mb-0 z-10 w-full bottom-0 py-5 text-sm text-gray-700">
            <div className="container mx-auto">
                <div className="py-2 text-center">Thanks for checking out my website. I built it with Next.js / React.js & TailwindCSS and deployed it via Vercel.</div>
                {/* <div className="py-2">Links</div> */}
            </div>
        </div>
    )
}

export default Footer
