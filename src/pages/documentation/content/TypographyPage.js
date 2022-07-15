import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, {
	CardBody,
	CardCodeView,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import CommonCodePreview from '../../../components/common/CommonCodePreview';
import { componentsMenu } from '../../../menu';

const TypographyPage = () => {
	const _displayFontSize = `
$display-font-sizes: (
  1: 5rem,
  2: 4.5rem,
  3: 4rem,
  4: 3.5rem,
  5: 3rem,
  6: 2.5rem
);

$display-font-weight: 300;
$display-line-height: $headings-line-height;`;

	const _fancyHeading = `
<h3>
  Fancy display heading
  <small className='text-muted'>
    With faded secondary text
  </small>
</h3>`;

	const _displayHeading = `
<h1 className='display-1'>Display 1</h1>
<h1 className='display-2'>Display 2</h1>
<h1 className='display-3'>Display 3</h1>
<h1 className='display-4'>Display 4</h1>
<h1 className='display-5'>Display 5</h1>
<h1 className='display-6'>Display 6</h1>`;

	const _lead = `
<p className='lead'>
  This is a lead paragraph. It stands out from regular paragraphs.
</p>`;

	const _inlineElements = `
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>`;

	const _abbr = `
<p><abbr title='attribute'>attr</abbr></p>
<p><abbr title='HyperText Markup Language' className='initialism'>HTML</abbr></p>`;

	const _blockquote = `
<blockquote className='blockquote'>
	<p>A well-known quote, contained in a blockquote element.</p>
</blockquote>`;

	const _namingASource = `
<figure>
	<blockquote className='blockquote'>
		<p>A well-known quote, contained in a blockquote element.</p>
	</blockquote>
	<figcaption className='blockquote-footer'>
		Someone famous in <cite title='Source Title'>Source Title</cite>
	</figcaption>
</figure>`;

	const _namingASourceCenter = `
<figure className='text-center'>
	<blockquote className='blockquote'>
		<p>A well-known quote, contained in a blockquote element.</p>
	</blockquote>
	<figcaption className='blockquote-footer'>
		Someone famous in <cite title='Source Title'>Source Title</cite>
	</figcaption>
</figure>`;

	const _namingASourceEnd = `
<figure className='text-end'>
	<blockquote className='blockquote'>
		<p>A well-known quote, contained in a blockquote element.</p>
	</blockquote>
	<figcaption className='blockquote-footer'>
		Someone famous in <cite title='Source Title'>Source Title</cite>
	</figcaption>
</figure>`;

	const _listUn = `
<ul className='list-unstyled'>
	<li>This is a list.</li>
	<li>It appears completely unstyled.</li>
	<li>Structurally, it's still a list.</li>
	<li>However, this style only applies toimmediate child elements.</li>
	<li>Nested lists:
		<ul>
			<li>are unaffected by this style</li>
			<li>will still show a bullet</li>
			<li>and have appropriate left margin</li>
		</ul>
	</li>
	<li>This may still come in handy in some situations.</li>
</ul>`;

	const _listInline = `
<ul className='list-inline'>
	<li className='list-inline-item'>This is a list item.</li>
	<li className='list-inline-item'>And another one.</li>
	<li className='list-inline-item'>But they're displayed inline.</li>
</ul>`;

	// language=HTML
	const _descListAlign = `
<dl class="row">
	<dt class="col-sm-3">Description lists</dt>
	<dd class="col-sm-9">A description list is perfect for defining terms.</dd>
	
	<dt class="col-sm-3">Term</dt>
	<dd class="col-sm-9">
		<p>Definition for the term.</p>
    	<p>And some more placeholder definition text.</p>
    </dd>

	<dt class="col-sm-3">Another term</dt>
	<dd class="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

	<dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
	<dd class="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>
	
	<dt class="col-sm-3">Nesting</dt>
	<dd class="col-sm-9">
		<dl class="row">
			<dt class="col-sm-4">Nested definition list</dt>
			<dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
		</dl>
	</dd>
</dl>`;

	return (
		<PageWrapper title={componentsMenu.content.subMenu.typography.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Content', to: '/content' },
							{ title: 'Typography', to: '/content/typography' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Typography</h1>
						<p className='lead'>
							Documentation and examples for Bootstrap typography, including global
							settings, headings, body text, lists, and more.
						</p>
					</div>

					<div className='col-12'>
						<Card id='global-settings' className='scroll-margin' stretch>
							<CardBody>
								<CardTitle>Global settings</CardTitle>
								<p>
									Bootstrap sets basic global display, typography, and link
									styles. When more control is needed, check out the textual
									utility classes.
								</p>
								<ul>
									<li>
										Use a{' '}
										<a
											href='https://getbootstrap.com/docs/5.0/content/reboot/#native-font-stack'
											target='_blank'
											rel='noreferrer'>
											native font stack
										</a>{' '}
										that selects the best <code>font-family</code>
										for each OS and device.
									</li>
									<li>
										For a more inclusive and accessible type scale, we use the
										browser’s default root <code>font-size</code> (typically{' '}
										<b>13px</b>) so visitors can customize their browser
										defaults as needed.
									</li>
									<li>
										Use the <code>$font-family-base</code>,{' '}
										<code>$font-size-base</code>, and{' '}
										<code>$line-height-base</code>
										attributes as our typographic base applied to the {`<body>`}
										.
									</li>
									<li>
										Set the global link color via <code>$link-color</code>.
									</li>
									<li>
										Use <code>$body-bg</code> to set a{' '}
										<code>background-color</code> on the {`<body>`} (
										<code>#fff</code> by default).
									</li>
								</ul>
								<p>
									These styles can be found within <code>_reboot.scss</code>, and
									the global variables are defined in <code>_variables.scss</code>
									. You can write in <code>src/styles/settings/_index.scss</code>.
									Make sure to set <code>$font-size-base</code> in{' '}
									<code>rem</code>.
								</p>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='headings' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='TextFields'>
									<CardTitle tag='h3'>Headings</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row'>
									<div className='col-lg-6'>
										<Card shadow='none' borderSize={1} stretch>
											<CardBody>
												<p>
													All HTML headings, <code>{`<h1>`}</code> through{' '}
													<code>{`<h6>`}</code>, are available.
												</p>
												<table className='table'>
													<thead>
														<tr>
															<th>Heading</th>
															<th>Example</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<code>{`<h1>`}</code>...
																<code>{`</h1>`}</code>
															</td>
															<td>
																<h1>h1. Bootstrap heading</h1>
															</td>
														</tr>
														<tr>
															<td>
																<code>{`<h2>`}</code>...
																<code>{`</h2>`}</code>
															</td>
															<td>
																<h2>h2. Bootstrap heading</h2>
															</td>
														</tr>
														<tr>
															<td>
																<code>{`<h3>`}</code>...
																<code>{`</h3>`}</code>
															</td>
															<td>
																<h3>h3. Bootstrap heading</h3>
															</td>
														</tr>
														<tr>
															<td>
																<code>{`<h4>`}</code>...
																<code>{`</h4>`}</code>
															</td>
															<td>
																<h4>h4. Bootstrap heading</h4>
															</td>
														</tr>
														<tr>
															<td>
																<code>{`<h5>`}</code>...
																<code>{`</h5>`}</code>
															</td>
															<td>
																<h5>h5. Bootstrap heading</h5>
															</td>
														</tr>
														<tr>
															<td>
																<code>{`<h6>`}</code>...
																<code>{`</h6>`}</code>
															</td>
															<td>
																<h6>h6. Bootstrap heading</h6>
															</td>
														</tr>
													</tbody>
												</table>
											</CardBody>
										</Card>
									</div>
									<div className='col-lg-6'>
										<Card shadow='none' borderSize={1} stretch>
											<CardBody>
												<p>
													<code>.h1</code> through <code>.h6</code>{' '}
													classes are also available, for when you want to
													match the font styling of a heading but cannot
													use the associated HTML element.
												</p>
												<table className='table'>
													<thead>
														<tr>
															<th>Heading</th>
															<th>Example</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<code>{`<p className='h1'>`}</code>
																...
																<code>{`</p>`}</code>
															</td>
															<td>
																<p className='h1'>
																	h1. Bootstrap heading
																</p>
															</td>
														</tr>
														<tr>
															<td>
																<code>{`<p className='h2'>`}</code>
																...
																<code>{`</p>`}</code>
															</td>
															<td>
																<p className='h2'>
																	h2. Bootstrap heading
																</p>
															</td>
														</tr>
														<tr>
															<td>
																<code>{`<p className='h3'>`}</code>
																...
																<code>{`</p>`}</code>
															</td>
															<td>
																<p className='h3'>
																	h3. Bootstrap heading
																</p>
															</td>
														</tr>
														<tr>
															<td>
																<code>{`<p className='h4'>`}</code>
																...
																<code>{`</p>`}</code>
															</td>
															<td>
																<p className='h4'>
																	h4. Bootstrap heading
																</p>
															</td>
														</tr>
														<tr>
															<td>
																<code>{`<p className='h5'>`}</code>
																...
																<code>{`</p>`}</code>
															</td>
															<td>
																<p className='h5'>
																	h5. Bootstrap heading
																</p>
															</td>
														</tr>
														<tr>
															<td>
																<code>{`<p className='h6'>`}</code>
																...
																<code>{`</p>`}</code>
															</td>
															<td>
																<p className='h6'>
																	h6. Bootstrap heading
																</p>
															</td>
														</tr>
													</tbody>
												</table>
											</CardBody>
										</Card>
									</div>
								</div>
								<Card id='customizing-headings' className='scroll-margin'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Customizing headings</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<CommonCodePreview code={_fancyHeading}>
											<h3>
												Fancy display heading{' '}
												<small className='text-muted'>
													With faded secondary text
												</small>
											</h3>
										</CommonCodePreview>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='display-headings' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='FormatSize'>
									<CardTitle tag='h3'>Display headings</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Traditional heading elements are designed to work best in the
									meat of your page content. When you need a heading to stand out,
									consider using a <b>display heading</b>—a larger, slightly more
									opinionated heading style.
								</p>
								<CommonCodePreview code={_displayHeading}>
									<h1 className='display-1'>Display 1</h1>
									<h1 className='display-2'>Display 2</h1>
									<h1 className='display-3'>Display 3</h1>
									<h1 className='display-4'>Display 4</h1>
									<h1 className='display-5'>Display 5</h1>
									<h1 className='display-6'>Display 6</h1>
								</CommonCodePreview>
								<p>
									Display headings are configured via the{' '}
									<code>$display-font-sizes</code> Sass map and two variables,{' '}
									<code>$display-font-weight</code> and{' '}
									<code>$display-line-height.</code>
								</p>
								<CardCodeView language='scss'>{_displayFontSize}</CardCodeView>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='lead' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='FormatBold'>
									<CardTitle tag='h3'>Lead</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Make a paragraph stand out by adding <code>.lead</code>.
								</p>
								<CommonCodePreview code={_lead} language='html'>
									<p className='lead'>
										This is a lead paragraph. It stands out from regular
										paragraphs.
									</p>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='inline-text-elements' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='FormatItalic'>
									<CardTitle tag='h3'>Inline text elements</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>Styling for common inline HTML5 elements.</p>
								<CommonCodePreview code={_inlineElements} language='html'>
									<p>
										You can use the mark tag to <mark>highlight</mark> text.
									</p>
									<p>
										<del>
											This line of text is meant to be treated as deleted
											text.
										</del>
									</p>
									<p>
										<s>
											This line of text is meant to be treated as no longer
											accurate.
										</s>
									</p>
									<p>
										<ins>
											This line of text is meant to be treated as an addition
											to the document.
										</ins>
									</p>
									<p>
										<u>This line of text will render as underlined.</u>
									</p>
									<p>
										<small>
											This line of text is meant to be treated as fine print.
										</small>
									</p>
									<p>
										<strong>This line rendered as bold text.</strong>
									</p>
									<p>
										<em>This line rendered as italicized text.</em>
									</p>
								</CommonCodePreview>
								<p>Beware that those tags should be used for semantic purpose:</p>
								<ul>
									<li>
										<code>{`<mark>`}</code> represents text which is marked or
										highlighted for reference or notation purposes.
									</li>
									<li>
										<code>{`<small>`}</code> represents side-comments and small
										print, like copyright and legal text.
									</li>
									<li>
										<code>{`<s>`}</code> represents element that are no longer
										relevant or no longer accurate.
									</li>
									<li>
										<code>{`<u>`}</code> represents a span of inline text which
										should be rendered in a way that indicates that it has a
										non-textual annotation.
									</li>
								</ul>
								<p>
									If you want to style your text, you should use the following
									classes instead:
								</p>
								<ul>
									<li>
										<code>.mark</code> will apply the same styles as{' '}
										<code>{`<mark>`}</code>.
									</li>
									<li>
										<code>.small</code> will apply the same styles as{' '}
										<code>{`<small>`}</code>
									</li>
									<li>
										<code>.text-decoration-underline</code> will apply the same
										styles as <code>{`<u>`}</code>.
									</li>
									<li>
										<code>.text-decoration-line-through</code> will apply the
										same styles as <code>{`<s>`}</code>.
									</li>
								</ul>
								<p>
									While not shown above, feel free to use <code>{`<b>`}</code> and{' '}
									<code>{`<i>`}</code> in HTML5. <code>{`<b>`}</code> is meant to
									highlight words or phrases without conveying additional
									importance, while <code>{`<i>`}</code> is mostly for voice,
									technical terms, etc.
								</p>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='text-utilities' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='FormatClear'>
									<CardTitle tag='h3'>Text utilities</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Change text alignment, transform, style, weight, line-height,
									decoration and color with our{' '}
									<Link to='../utilities/text'>text utilities</Link> and{' '}
									<Link to='../utilities/colors'>color utilities</Link>.
								</p>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='abbreviations' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='FormatColorText'>
									<CardTitle tag='h3'>Abbreviations</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Stylized implementation of HTML’s <code>{`<abbr>`}</code>{' '}
									element for abbreviations and acronyms to show the expanded
									version on hover. Abbreviations have a default underline and
									gain a help cursor to provide additional context on hover and to
									users of assistive technologies.
								</p>
								<p>
									Add <code>.initialism</code> to an abbreviation for a slightly
									smaller font-size.
								</p>
								<CommonCodePreview code={_abbr}>
									<p>
										<abbr title='attribute'>attr</abbr>
									</p>
									<p className='mb-0'>
										<abbr
											title='HyperText Markup Language'
											className='initialism'>
											HTML
										</abbr>
									</p>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='blockquotes' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='FormatQuote'>
									<CardTitle tag='h3'>Blockquotes</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									For quoting blocks of content from another source within your
									document. Wrap{' '}
									<code>{`<blockquote className='blockquote'>`}</code> around any{' '}
									<abbr title='HyperText Markup Language'>HTML</abbr> as the
									quote.
								</p>
								<CommonCodePreview code={_blockquote}>
									<blockquote className='blockquote'>
										<p>
											A well-known quote, contained in a blockquote element.
										</p>
									</blockquote>
								</CommonCodePreview>
								<Card id='naming-a-source' className='scroll-margin'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Naming a source</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											The HTML spec requires that blockquote attribution be
											placed outside the <code>{`<blockquote>`}</code>. When
											providing attribution, wrap your{' '}
											<code>{`<blockquote>`}</code> in a{' '}
											<code>{`<figure>`}</code> and use a{' '}
											<code>{`<figcaption>`}</code> or a block level element
											(e.g., <code>{`<p>`}</code>) with the .blockquote-footer
											class. Be sure to wrap the name of the source work in{' '}
											<code>{`<cite>`}</code> as well.
										</p>
										<CommonCodePreview code={_namingASource}>
											<figure>
												<blockquote className='blockquote'>
													<p>
														A well-known quote, contained in a
														blockquote element.
													</p>
												</blockquote>
												<figcaption className='blockquote-footer'>
													Someone famous in{' '}
													<cite title='Source Title'>Source Title</cite>
												</figcaption>
											</figure>
										</CommonCodePreview>
									</CardBody>
								</Card>
								<Card id='alignment' className='scroll-margin'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Alignment</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Use text utilities as needed to change the alignment of
											your blockquote.
										</p>
										<CommonCodePreview code={_namingASourceCenter}>
											<figure className='text-center'>
												<blockquote className='blockquote'>
													<p>
														A well-known quote, contained in a
														blockquote element.
													</p>
												</blockquote>
												<figcaption className='blockquote-footer'>
													Someone famous in{' '}
													<cite title='Source Title'>Source Title</cite>
												</figcaption>
											</figure>
										</CommonCodePreview>
										<CommonCodePreview code={_namingASourceEnd}>
											<figure className='text-end'>
												<blockquote className='blockquote'>
													<p>
														A well-known quote, contained in a
														blockquote element.
													</p>
												</blockquote>
												<figcaption className='blockquote-footer'>
													Someone famous in{' '}
													<cite title='Source Title'>Source Title</cite>
												</figcaption>
											</figure>
										</CommonCodePreview>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='lists' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='FormatListNumbered'>
									<CardTitle tag='h3'>Lists</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row'>
									<div className='col-lg-6'>
										<Card id='unstyled' stretch className='scroll-margin'>
											<CardHeader>
												<CardLabel>
													<CardTitle>Unstyled</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<p>
													Remove the default <code>list-style</code> and
													left margin on list items (immediate children
													only).{' '}
													<b>
														This only applies to immediate children list
														items
													</b>
													, meaning you will need to add the class for any
													nested lists as well.
												</p>
												<CommonCodePreview code={_listUn}>
													<ul className='list-unstyled'>
														<li>This is a list.</li>
														<li>It appears completely unstyled.</li>
														<li>Structurally, it's still a list.</li>
														<li>
															However, this style only applies to
															immediate child elements.
														</li>
														<li>
															Nested lists:
															<ul>
																<li>
																	are unaffected by this style
																</li>
																<li>will still show a bullet</li>
																<li>
																	and have appropriate left margin
																</li>
															</ul>
														</li>
														<li>
															This may still come in handy in some
															situations.
														</li>
													</ul>
												</CommonCodePreview>
											</CardBody>
										</Card>
									</div>
									<div className='col-lg-6'>
										<Card id='inline' stretch className='scroll-margin'>
											<CardHeader>
												<CardLabel>
													<CardTitle>Inline</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<p>
													Remove a list’s bullets and apply some light
													<code>margin</code> with a combination of two
													classes,
													<code>.list-inline</code> and{' '}
													<code>.list-inline-item</code>.
												</p>
												<CommonCodePreview code={_listInline}>
													<ul className='list-inline'>
														<li className='list-inline-item'>
															This is a list item.
														</li>
														<li className='list-inline-item'>
															And another one.
														</li>
														<li className='list-inline-item'>
															But they're displayed inline.
														</li>
													</ul>
												</CommonCodePreview>
											</CardBody>
										</Card>
									</div>
									<div className='col-lg-12'>
										<Card
											id='description-list-alignment'
											className='mb-0 scroll-margin'>
											<CardHeader>
												<CardLabel>
													<CardTitle>
														Description list alignment
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<p>
													Align terms and descriptions horizontally by
													using our grid system’s predefined classes (or
													semantic mixins). For longer terms, you can
													optionally add a <code>.text-truncate</code>{' '}
													class to truncate the text with an ellipsis.
												</p>
												<CommonCodePreview code={_descListAlign}>
													<dl className='row'>
														<dt className='col-sm-3'>
															Description lists
														</dt>
														<dd className='col-sm-9'>
															A description list is perfect for
															defining terms.
														</dd>

														<dt className='col-sm-3'>Term</dt>
														<dd className='col-sm-9'>
															<p>Definition for the term.</p>
															<p>
																And some more placeholder definition
																text.
															</p>
														</dd>

														<dt className='col-sm-3'>Another term</dt>
														<dd className='col-sm-9'>
															This definition is short, so no extra
															paragraphs or anything.
														</dd>

														<dt className='col-sm-3 text-truncate'>
															Truncated term is truncated
														</dt>
														<dd className='col-sm-9'>
															This can be useful when space is tight.
															Adds an ellipsis at the end.
														</dd>

														<dt className='col-sm-3'>Nesting</dt>
														<dd className='col-sm-9'>
															<dl className='row'>
																<dt className='col-sm-4'>
																	Nested definition list
																</dt>
																<dd className='col-sm-8'>
																	I heard you like definition
																	lists. Let me put a definition
																	list inside your definition
																	list.
																</dd>
															</dl>
														</dd>
													</dl>
												</CommonCodePreview>
											</CardBody>
										</Card>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default TypographyPage;
