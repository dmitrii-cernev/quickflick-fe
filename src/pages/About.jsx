export default function About() {
    return (
        <div className="main-gradient py-2 sm:p-8">
            <div
                className="w-11/12 mx-auto container text-left min-h-screen bg-white bg-opacity-40 backdrop-blur-[4px] p-8 sm:p-20 rounded-xl animate-fade animate-duration-200">
                <h1 className="text-4xl font-bold mb-4 text-[#36454f]">About Minimemo</h1>

                <div className="m-1 sm:m-6 p-2 sm:p-6 rounded-md shadow-md">
                    <section className="mb-8">
                        <p className="text-lg mb-4 text-[#36454f]">
                            At <span className="font-semibold">Minimemo</span>, we're passionate
                            about making the process of saving and revisiting informative videos as
                            intuitive and seamless as possible. Our platform is the result of
                            countless hours of development, driven by our commitment to enhance
                            learning and information retention in the digital age.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-2 text-[#36454f]">Our Vision</h2>
                        <p className="text-lg mb-4 text-[#36454f]">
                            We envision a world where everyone has easy access to educational
                            content, enabling a global community of learners to grow and share
                            knowledge without barriers. Minimemo aims to be at the forefront of this
                            vision, providing tools that empower users to curate their learning
                            materials efficiently.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-2 text-[#36454f]">Features at a
                            Glance</h2>
                        <ul className="list-disc text-lg text-[#36454f] pl-6">
                            <li className="mb-2">Custom Playlists: Organize your saved videos into
                                playlists for different subjects or interests.
                            </li>
                            <li className="mb-2">Interactive Summaries: Engage with video summaries
                                that highlight key points, making it easier to review important
                                information.
                            </li>
                            <li className="mb-2">Community Insights: Benefit from the wisdom of the
                                crowd with community tags, comments, and ratings.
                            </li>
                            <li className="mb-2">Cross-Platform Access: Whether you're on your
                                phone, tablet, or laptop, Minimemo keeps your content synchronized
                                and accessible.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-2 text-[#36454f]">Meet the Team</h2>
                        <p className="text-lg mb-4 text-[#36454f]">
                            Behind Minimemo is a diverse team of passionate educators, developers,
                            and content creators from around the globe. United by our shared belief
                            in the power of education, we work tirelessly to ensure that Minimemo
                            remains innovative, user-friendly, and impactful.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-2 text-[#36454f]">Join the
                            Community</h2>
                        <p className="text-lg mb-4 text-[#36454f]">
                            Minimemo is more than just a platform; it's a community of curious minds
                            eager to learn and grow together. Join us today to discover, save, and
                            share knowledge that matters. Let's make learning an enjoyable part of
                            our daily lives, one video at a time.
                        </p>
                    </section>

                    <p className="text-xl text-[#36454f]">
                        Ready to embark on your journey with Minimemo? Create your account and start
                        exploring the world of knowledge we have to offer. Together, let's build a
                        brighter, more informed future.
                    </p>
                </div>
            </div>
        </div>
    );
}