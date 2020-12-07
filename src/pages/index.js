import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Override slot="SectionContent" text-align="left" />
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="520px"
				text-align="left"
			>
				We are smart
			</Text>
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				text-align="left"
				font="--lead"
			>
				The smartest people work every day to provide the best service and to make our clients happy
			</Text>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						position="relative"
						overflow-x="hidden"
						overflow-y="hidden"
						align-items="flex-start"
					/>
					<Text
						as="h3"
						font="--base"
						margin="0"
						color="--light"
						quarkly-title="Status"
						position="absolute"
						right="auto"
						background="--color-green"
						padding="0px 12px 1px 12px"
						top="10px"
						text-align="center"
						left="10px"
						bottom="auto"
						border-radius="14px"
					>
						Employee
					</Text>
					<Text
						as="h3"
						font="--base"
						margin="0"
						color="--light"
						quarkly-title="Status"
						position="absolute"
						right="auto"
						background="--color-green"
						padding="0px 12px 1px 12px"
						top="10px"
						text-align="center"
						left="10px"
						bottom="auto"
						border-radius="14px"
					>
						Employee
					</Text>
					<Box
						margin="0 0 22px 0"
						padding-bottom="100%"
						background="url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat"
						quarkly-title="Photo"
						width="100%"
						border-radius="20px"
					/>
					<Text color="--grey" margin="0" quarkly-title="Title">
						title
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" quarkly-title="Name">
						Name
					</Text>
					<Text
						as="h3"
						font="--base"
						margin="0 0 12px 0"
						color="--light"
						quarkly-title="Status"
						background="--color-indigo"
						border-radius="14px"
						bottom="auto"
						left="10px"
						padding="0px 12px 1px 12px"
						right="auto"
						text-align="center"
						top="40px"
					>
						Design
					</Text>
					<Text
						as="h3"
						font="--base"
						margin="0 0 12px 0"
						color="--light"
						quarkly-title="Status"
						background="--color-primary"
						border-radius="14px"
						bottom="auto"
						left="10px"
						padding="0px 12px 1px 12px"
						right="auto"
						text-align="center"
						top="40px"
					>
						New York City
					</Text>
					<Text as="p" margin="20px 0 24px 0" quarkly-title="Address">
						Home address
					</Text>
					<Link
						href="tel:+6494461709"
						target="_blank"
						quarkly-title="Phone"
						font="--lead"
						text-decoration-line="initial"
						hover-color="#094da3"
						color="--primary"
					>
						Phone
					</Link>
					<Link
						href="mailto:hello@company.com"
						target="_blank"
						quarkly-title="Email"
						font="--lead"
						text-decoration-line="initial"
						hover-color="#094da3"
						color="--primary"
					>
						Email
					</Link>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1546672741-d327539d5f13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Developer
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						David R. Lema
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Marketing
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Janet E. Morey
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Designer
						<br />
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Claire R. Peery
						<br />
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});