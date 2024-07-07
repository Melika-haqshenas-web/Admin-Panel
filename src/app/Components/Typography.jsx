
import LeftMenu from "../LeftMenu/page"
import Footer from "./Footer";

let num = 2
export default function Typography() {
    return (
        <section className="w-full h-fit absolute top-32 left-0 flex bg-transparent">
            <LeftMenu num={num} />
            <div className="w-full xl:w-4/5 h-fit ">

                <div className="w-full h-14 xl:h-16 bg-[rgb(30,42,49)]">
                    <h2 className="text-[#dcf3ff] text-base pl-10 pt-3">TYPOGRAPHY</h2>
                </div>

                <div className="w-full h-fit flex justify-center flex-wrap">
                    <section className="w-[95%] h-fit bg-[#2b3c46] mb-8 rounded xl:mt-2 p-8 shadow-[0_3px_3px_rgba(0, 0, 0, .05)]">
                        <h4 className="mb-8 text-[#dcf3ff] uppercase">Body Copy</h4>
                        <p className="text-[#9bbcd1] text-justify mb-4">Pellentesque lacinia sagittis libero et feugiat. Etiam volutpat adipiscing tortor non
                            luctus. Vivamus venenatis vitae metus et aliquet. Praesent vitae justo purus. In
                            hendrerit lorem nisl, ac lacinia urna aliquet non. Quisque nisi tellus, rhoncus quis est
                            sit amet, lacinia euismod nunc. Aenean nec nibh velit. Fusce quis ante in nisl molestie
                            fringilla. Nunc vitae ante id magna feugiat condimentum. Maecenas sit amet urna
                            massa.</p>
                        <p className="text-[#9bbcd1] text-justify">Integer eu lectus sollicitudin, hendrerit est ac, sollicitudin nisl. Quisque viverra
                            sodales lectus nec ultrices. Fusce elit dolor, dignissim a nunc id, varius suscipit
                            turpis. Cras porttitor turpis vitae leo accumsan molestie. Morbi vitae luctus leo. Sed
                            nec scelerisque magna, et adipiscing est. Proin lobortis lectus eu sem ullamcorper,
                            commodo malesuada quam fringilla. Curabitur ac nunc dui. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos himenaeos. Fusce sagittis enim eu est
                            lacinia, ut egestas ligula imperdiet.</p>
                    </section>
                </div>

                <div className="w-full h-fit flex justify-center flex-wrap">
                    <section className="w-[95%] h-fit bg-[#2b3c46] mb-8 rounded xl:mt-2 p-8 shadow-[0_3px_3px_rgba(0, 0, 0, .05)]">
                        <h4 className="text-[#dcf3ff] uppercase">Headings</h4>
                        <h6 className="text-[#7996a9] text-sm mb-8">All HTML headings, <code className="text-[#bd9f68] text-[87.5%]">&lt;h1&gt;</code> through <code className="text-[#bd9f68] text-[87.5%]">&lt;h6&gt;</code> , are available.</h6>
                        <p className="mb-4 text-[#9bbcd1] text-base">
                            <code className="text-[#bd9f68] text-[87.5%]">.h1 </code>
                            through
                            <code className="text-[#bd9f68] text-[87.5%]">.h6 </code>
                            classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.
                        </p>
                        <br />
                        <h1 className="text-4xl text-[#dcf3ff] font-medium leading-10 mb-2">h1. Bootstrap heading</h1>
                        <br />
                        <h2 className="text-3xl text-[#dcf3ff] font-medium leading-10 mb-2">h2. Bootstrap heading</h2>
                        <br />
                        <h3 className="text-2xl text-[#dcf3ff] font-medium leading-10 mb-2">h3. Bootstrap heading</h3>
                        <br />
                        <h4 className="text-xl text-[#dcf3ff] font-medium leading-10 mb-2">h4. Bootstrap heading</h4>
                        <br />
                        <h5 className="text-lg text-[#dcf3ff] font-medium leading-10 mb-2">h5. Bootstrap heading</h5>
                        <br />
                        <h6 className="text-base text-[#dcf3ff] font-medium leading-10 mb-2">h6. Bootstrap heading</h6>
                    </section>
                </div>

                <div className="w-full h-fit flex justify-center flex-wrap overflow-hidden">
                    <section className="w-[95%] h-fit bg-[#2b3c46] mb-8 rounded xl:mt-2 p-8 shadow-[0_3px_3px_rgba(0, 0, 0, .05)]">
                        <h4 className="text-[#dcf3ff] uppercase">Display headings</h4>
                        <h6 className="text-[#7996a9] text-sm mb-8">Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <b>display heading</b>  - a larger, slightly more opinionated heading style.</h6>
                        <br />
                        <h1 className="text-8xl text-[#dcf3ff] font-light leading-none mb-3 break-words">Display 1</h1>
                        <br />
                        <br />
                        <br />
                        <h1 className="text-[5.5rem] text-[#dcf3ff] font-light leading-none mb-3 break-words">Display 2</h1>
                        <br />
                        <br />
                        <br />
                        <h1 className="text-7xl text-[#dcf3ff] font-light leading-none mb-3 break-words">Display 3</h1>
                        <br />
                        <br />
                        <h1 className="text-[3.5rem] text-[#dcf3ff] font-light leading-none mb-3 break-words">Display 4</h1>
                    </section>
                </div>

                <div className="w-full h-fit flex justify-center flex-wrap">
                    <section className="w-[95%] h-fit bg-[#2b3c46] mb-8 rounded xl:mt-2 p-8 shadow-[0_3px_3px_rgba(0, 0, 0, .05)]">
                        <h4 className="text-[#dcf3ff] uppercase">Lead</h4>
                        <h6 className="text-sm text-[#9bbcd1] text-justify mb-4">Make a paragraph stand out by adding<code className="text-[#bd9f68] text-[87.5%]">.lead </code> </h6>
                        <p className="text-[#9bbcd1] text-justify mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lacus eu libero interdum posuere a eu ex. In sed ullamcorper urna, vitae varius neque. Sed egestas blandit nibh. Donec dignissim cursus dui, et vestibulum massa pharetra vitae. Etiam porta mi a velit dapibus, non finibus dolor euismod. Pellentesque enim mi, condimentum ac viverra vitae, imperdiet id tellus. Phasellus eu elementum odio. Duis et odio ut est hendrerit consectetur at id ipsum.</p>
                        <p className="text-[#9bbcd1] text-justify">Quisque a feugiat elit. Donec turpis turpis, dictum sed risus sed, consequat semper ligula. Quisque magna risus, tristique eu venenatis non, luctus ut leo. Cras auctor, augue et varius elementum, augue sapien maximus turpis, ac sagittis ante lectus quis tellus. Fusce fringilla gravida sollicitudin. Sed orci mi, iaculis a sem non, vehicula congue augue. Cras nibh enim, rhoncus eu fermentum nec, finibus eget ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus..</p>
                    </section>
                </div>

                <div className="w-full h-fit flex justify-center flex-wrap">
                    <section className="w-[95%] h-fit bg-[#2b3c46] mb-8 rounded xl:mt-2 p-8 shadow-[0_3px_3px_rgba(0, 0, 0, .05)]">
                        <h4 className="text-[#dcf3ff] uppercase">Inline text elements</h4>
                        <h6 className="text-sm text-[#9bbcd1] text-justify mb-4">Styling for common inline HTML5 elements.</h6>
                        <p className="text-[#9bbcd1] text-justify mb-4">You can use the mark tag to <mark className="p-1 bg-[#dcf3ff]">highlight</mark> text.</p>
                        <p className="text-[#9bbcd1] text-justify mb-4"><del>This line of text is meant to be treated as deleted text.</del></p>
                        <p className="text-[#9bbcd1] text-justify mb-4"><s>This line of text is meant to be treated as no longer accurate.</s></p>
                        <p className="text-[#9bbcd1] text-justify mb-4"><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                        <p className="text-[#9bbcd1] text-justify mb-4"><u>This line of text will render as underlined</u></p>
                        <p className="text-[#9bbcd1] text-justify mb-4"><small>This line of text is meant to be treated as fine print.</small></p>
                        <p className="text-[#9bbcd1] text-justify mb-4"><strong>This line rendered as bold text.</strong></p>
                        <p className="text-[#9bbcd1] text-justify mb-4"><em>This line rendered as italicized text.</em></p>
                    </section>
                </div>

                <div className="w-full h-fit flex justify-center flex-wrap">
                    <section className="w-[95%] h-fit bg-[#2b3c46] mb-8 rounded xl:mt-2 p-8 shadow-[0_3px_3px_rgba(0, 0, 0, .05)]">
                        <h4 className="text-[#dcf3ff] uppercase">Text utilities</h4>
                        <h6 className="text-sm text-[#9bbcd1] text-justify mb-4">Change text alignment, transform, style, weight, and color with Bootstrap's text utilities.</h6>
                        <h5 className="text-[#dcf3ff] mb-2">Text alignment</h5>
                        <p className="text-[#9bbcd1] text-justify mb-4">Easily realign text to components with text alignment classes.</p>
                        <br />
                        <p className="text-[#9bbcd1] mb-4 text-left">Left aligned text on all viewport sizes.</p>
                        <p className="text-[#9bbcd1] mb-4 text-center">Center aligned text on all viewport sizes.</p>
                        <p className="text-[#9bbcd1] mb-4 text-right">Right aligned text on all viewport sizes.</p>
                        <p className="text-[#9bbcd1] mb-4 text-right text-sm">Right aligned text on viewports sized SM (small) or wider.</p>
                        <p className="text-[#9bbcd1] mb-4 text-right text-base">Right aligned text on viewports sized MD (medium) or wider.</p>
                        <p className="text-[#9bbcd1] mb-4 text-right text-lg">Right aligned text on viewports sized LG (large) or wider.</p>
                        <p className="text-[#9bbcd1] mb-4 text-right text-xl">Right aligned text on viewports sized XL (extra-large) or wider.</p>
                        <br />
                        <hr className="border-[#394e5a] my-4" />
                        <br />
                        <h5 className="text-[#dcf3ff] mb-2">Text transform</h5>
                        <p className="text-[#9bbcd1] text-justify mb-4">Transform text in components with text capitalization classes.</p>
                        <br />
                        <p className="text-[#9bbcd1] mb-4 lowercase">Lowercased text.</p>
                        <p className="text-[#9bbcd1] mb-4 uppercase">Uppercased text.</p>
                        <p className="text-[#9bbcd1] mb-4 capitalize">CapiTaliZed text.</p>
                        <br />
                        <hr className="border-[#394e5a] my-4" />
                        <br />
                        <h5 className="text-[#dcf3ff] mb-2">Font weight and italics</h5>
                        <p className="text-[#9bbcd1] text-justify mb-4">Quickly change the weight (boldness) of text or italicize text.</p>
                        <br />
                        <p className="text-[#9bbcd1] mb-4 font-bold">Bold text.</p>
                        <p className="text-[#9bbcd1] mb-4 font-extrabold">Bolder weight text (relative to the parent element).</p>
                        <p className="text-[#9bbcd1] mb-4 font-normal">Normal weight text.</p>
                        <p className="text-[#9bbcd1] mb-4 font-light">Light weight text.</p>
                        <p className="text-[#9bbcd1] mb-4 font-extralight">Lighter weight text (relative to the parent element).</p>
                        <p className="text-[#9bbcd1] mb-4 capitalize italic">Italic text.</p>
                    </section>
                </div>

                <div className="w-full h-fit flex justify-center flex-wrap">
                    <section className="w-[95%] h-fit bg-[#2b3c46] mb-8 rounded xl:mt-2 p-8 shadow-[0_3px_3px_rgba(0, 0, 0, .05)]">
                        <h4 className="text-[#dcf3ff] uppercase">Abbreviations</h4>
                        <h6 className="text-[#7996a9] text-sm mb-8">Stylized implementation of HTML’s <code className="text-[#bd9f68] text-[87.5%]">&lt;abbr&gt;</code> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline from Normalize.css and gain a help cursor to provide additional context on hover and to users of assistive technologies.</h6>
                        <p className="mb-4 text-[#9bbcd1] text-base">Add
                            <code className="text-[#bd9f68] text-[87.5%]">.initialism </code>
                            to an abbreviation for a slightly smaller font-size.
                        </p>
                        <br />
                        <p className="text-[#9bbcd1] text-justify mb-4"><abbr title="attribute" className="cursor-help">attr</abbr></p>
                        <p className="text-[#9bbcd1] text-justify mb-4"><abbr title="HyperText Markup Language" className="cursor-help">HTML</abbr></p>
                    </section>
                </div>

                <div className="w-full h-fit flex justify-center flex-wrap">
                    <section className="w-[95%] h-fit bg-[#2b3c46] mb-8 rounded xl:mt-2 p-8 shadow-[0_3px_3px_rgba(0, 0, 0, .05)]">
                        <h4 className="text-[#dcf3ff] uppercase">Blockquotes</h4>
                        <h6 className="text-sm text-[#9bbcd1] text-justify mb-8">For quoting blocks of content from another source within your document.</h6>
                        <blockquote className="text-xl text-[#9bbcd1] mb-4">
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</div>
                        </blockquote>
                        <br />
                        <hr className="border-[#394e5a] my-4" />
                        <br />
                        <h5 className="text-[#dcf3ff] mb-2">Naming a source</h5>
                        <p className="text-[#9bbcd1] text-justify mb-4">Add a <code className="text-[#bd9f68] text-[87.5%]">&lt;footer class="blockquote-footer"&gt;</code> for identifying the source. Wrap the name of the source work in <code className="text-[#bd9f68] text-[87.5%]">&lt;cite&gt;</code>. </p>
                        <br />
                        <blockquote className="text-xl text-[#9bbcd1] mb-4">
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</div>
                            <footer className="text-[#7996a9] text-[80%] before:content-['\2014\00A0']">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                        <br />
                        <hr className="border-[#394e5a] my-4" />
                        <br />
                        <h5 className="text-[#dcf3ff] mb-2">Alignment</h5>
                        <p className="text-[#9bbcd1] text-justify mb-4">Use text utilities as needed to change the alignment of your blockquote.</p>
                        <br />
                        <blockquote className="text-xl text-[#9bbcd1] mb-4 text-center">
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</div>
                            <footer className="text-[#7996a9] text-[80%] before:content-['\2014\00A0']">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                        <br />
                        <blockquote className="text-xl text-[#9bbcd1] mb-4 text-right">
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</div>
                            <footer className="text-[#7996a9] text-[80%] before:content-['\2014\00A0']">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>

                    </section>
                </div>

                <div className="w-full h-fit flex justify-center flex-wrap">
                    <section className="w-[95%] h-fit bg-[#2b3c46] mb-8 rounded xl:mt-2 p-8 shadow-[0_3px_3px_rgba(0, 0, 0, .05)]">
                        <h4 className="text-[#dcf3ff] uppercase mb-4">Abbreviations</h4>
                        <h5 className="text-[#dcf3ff] text-[1.1rem] mb-4">Unstyled</h5>
                        <p className="text-[#9bbcd1] text-sm mb-8">Remove the default <code className="text-[#bd9f68] text-[87.5%]">list-style</code>  and left margin on list items (immediate children only). <b>This only applies to immediate children list items</b>, meaning you will need to add the class for any nested lists as well.</p>
                        <br />
                        <ul className="list-none text-[#9bbcd1] mb-4">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer molestie lorem at massa</li>
                            <li>Facilisis in pretium nisl aliquet</li>
                            <li>Nulla volutpat aliquam velit
                                <ul className="pl-8">
                                    <li className="before:content-['\25CB'] before:mr-3 list-inside">Phasellus iaculis neque</li>
                                    <li className="before:content-['\25CB'] before:mr-3 list-inside">Purus sodales ultricies</li>
                                    <li className="before:content-['\25CB'] before:mr-3 list-inside">Vestibulum laoreet porttitor sem</li>
                                    <li className="before:content-['\25CB'] before:mr-3 list-inside">Ac tristique libero volutpat at</li>
                                </ul>
                            </li>
                            <li>Faucibus porta lacus fringilla vel</li>
                            <li>Aenean sit amet erat nunc</li>
                            <li>Eget porttitor lorem</li>
                        </ul>
                        <br />
                        <hr className="border-[#394e5a] my-4" />
                        <br />
                        <h5 className="text-[#dcf3ff] mb-2">Styled</h5>
                        <p className="text-[#9bbcd1] text-justify mb-4">Custom styled lists using Material Design Iconic Fonts</p>
                        <br />
                        <div className="w-full md:grid md:grid-cols-3">
                            <div className="px-3.5">
                                <ul className="list-none text-[#9bbcd1]">
                                    <li className="before:text-center before:content-['\2014'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Lorem ipsum dolor sit amet</li>
                                    <li className="before:text-center before:content-['\2014'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Consectetur adipiscing elit</li>
                                    <li className="before:text-center before:content-['\2014'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Integer molestie lorem at massa</li>
                                    <li className="before:text-center before:content-['\2014'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Facilisis in pretium nisl aliquet</li>
                                    <li className="before:text-center before:content-['\2014'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Nulla volutpat aliquam velit</li>
                                    <li className="before:text-center before:content-['\2014'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Faucibus porta lacus fringilla vel</li>
                                    <li className="before:text-center before:content-['\2014'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Aenean sit amet erat nunc</li>
                                    <li className="before:text-center before:content-['\2014'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Eget porttitor lorem</li>
                                </ul>
                            </div>
                            <div className="px-3.5">
                                <ul className="list-none text-[#9bbcd1]">
                                    <li className="before:text-center before:content-['\2713'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Lorem ipsum dolor sit amet</li>
                                    <li className="before:text-center before:content-['\2713'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Consectetur adipiscing elit</li>
                                    <li className="before:text-center before:content-['\2713'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Integer molestie lorem at massa</li>
                                    <li className="before:text-center before:content-['\2713'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Facilisis in pretium nisl aliquet</li>
                                    <li className="before:text-center before:content-['\2713'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Nulla volutpat aliquam velit</li>
                                    <li className="before:text-center before:content-['\2713'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Faucibus porta lacus fringilla vel</li>
                                    <li className="before:text-center before:content-['\2713'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Aenean sit amet erat nunc</li>
                                    <li className="before:text-center before:content-['\2713'] before:border before:border-[#9bbcd1] before:rounded-full before:mr-4 before:px-1 before:py-px leading-8">Eget porttitor lorem</li>
                                </ul>
                            </div>
                            <div className="px-3.5">
                                <ul className="list-none text-[#9bbcd1]">
                                    <li className="before:text-center before:content-['\2500'] before:mr-4 leading-8">Lorem ipsum dolor sit amet</li>
                                    <li className="before:text-center before:content-['\2500'] before:mr-4 leading-8">Consectetur adipiscing elit</li>
                                    <li className="before:text-center before:content-['\2500'] before:mr-4 leading-8">Integer molestie lorem at massa</li>
                                    <li className="before:text-center before:content-['\2500'] before:mr-4 leading-8">Facilisis in pretium nisl aliquet</li>
                                    <li className="before:text-center before:content-['\2500'] before:mr-4 leading-8">Nulla volutpat aliquam velit</li>
                                    <li className="before:text-center before:content-['\2500'] before:mr-4 leading-8">Faucibus porta lacus fringilla vel</li>
                                    <li className="before:text-center before:content-['\2500'] before:mr-4 leading-8">Aenean sit amet erat nunc</li>
                                    <li className="before:text-center before:content-['\2500'] before:mr-4 leading-8">Eget porttitor lorem</li>
                                </ul>
                            </div>
                        </div>
                        <br />
                        <hr className="border-[#394e5a] my-4" />
                        <br />
                        <h5 className="text-[#dcf3ff]">Inline</h5>
                        <p className="text-[#7996a9] mb-8">Remove a list’s bullets and apply some light <code className="text-[#bd9f68] text-[87.5%]">margin</code> with a combination of two classes, <code className="text-[#bd9f68] text-[87.5%]">.list-inline</code> and <code className="text-[#bd9f68] text-[87.5%]">.list-inline-item</code></p>
                        <ul className="list-none text-[#9bbcd1] flex">
                            <li className="mr-2">Lorem ipsum</li>
                            <li className="mr-2">Phasellus iaculis</li>
                            <li className="mr-2">Nulla volutpat</li>
                        </ul>
                    </section>
                </div>

                <div className="w-full h-fit flex justify-center flex-wrap">
                    <section className="w-[95%] h-fit bg-[#2b3c46] mb-8 rounded xl:mt-2 p-8 shadow-[0_3px_3px_rgba(0, 0, 0, .05)]">
                        <h4 className="text-[#dcf3ff] uppercase">DESCRIPTION LIST ALIGNMENT</h4>
                        <h6 className="text-[#7996a9] text-sm mb-8">Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a <code className="text-[#bd9f68] text-[87.5%]">.text-truncate</code>  class to truncate the text with an ellipsis.</h6>
                        <div className="w-full ">
                            <div className="text-[#9bbcd1] flex w-full my-2">
                                <h4 className="w-[35%]">Description lists</h4>
                                <p className="w-[65%]">A description list is perfect for defining terms.</p>
                            </div>
                            <div className="text-[#9bbcd1] flex">
                                <h4 className="w-[35%]">Euismod</h4>
                                <div className="w-[65%] flex flex-wrap">
                                    <p className="w-full mb-4">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                                    <p className="w-full">Donec id elit non mi porta gravida at eget metus.</p>
                                </div>
                            </div>
                            <div className="text-[#9bbcd1] flex w-full my-2">
                                <h4 className="w-[35%]">Malesuada porta</h4>
                                <p className="w-[65%]">Etiam porta sem malesuada magna mollis euismod.</p>
                            </div>
                            <div className="text-[#9bbcd1] flex w-full my-2">
                                <h4 className="w-[35%] text-ellipsis">Truncated term is truncated</h4>
                                <p className="w-[65%]">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            </div>
                            <div className="text-[#9bbcd1] flex">
                                <h4 className="w-[35%]">Nesting</h4>
                                <div className="w-[65%] flex flex-nowrap">
                                    <p className=" mr-8 mb-4">Nested definition list</p>
                                    <p className=" w-fit">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </section>
    )
}