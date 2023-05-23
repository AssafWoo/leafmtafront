import BlogCard from "../../../Components/Cards/Blogs/BlogCard";
import { FadeMainGreen } from "../../../Styles/colors";
import { BoxSize, BreakLine, Flex } from "../../../Styles/styles";
import { BoxHeader, BoxParag } from "../style";

const articles = [
	{
		name: "How Coders Can Help Fight Climate Change",
		writer: "Christopher Mimsarchive page",
		description:
			"The enormously complicated computer models that help scientists project the future of climate change are pretty kick-ass, despite the fact that they’re developed by scientists and not formally-trained software engineers.",
		link: "https://www.technologyreview.com/2010/08/31/200618/how-coders-can-help-fight-climate-change/",
		mins: "2",
	},
	{
		name: "What is the Voluntary Carbon Market?",
		writer: "Carbon Credits",
		description:
			"In an effort to curb climate change, big companies like Microsoft, Google, and Starbucks are setting ambitious goals to achieve carbon neutrality and the Voluntary Carbon Market (VCM) is helping them to do so.",
		link: "https://carboncredits.com/what-is-the-voluntary-carbon-market/",
		mins: "12",
	},
	{
		name: "The Elusive Green Consumer",
		writer: "Katherine White, David J. Hardisty, and Rishad Habib",
		description:
			"On the surface, there has seemingly never been a better time to launch a sustainable offering. Consumers—particularly Millennials—increasingly say they want brands that embrace purpose and sustainability. Indeed, one recent report revealed that certain categories of products with sustainability claims showed twice the growth of their traditional counterparts",
		link: "https://hbr.org/2019/07/the-elusive-green-consumer",
		mins: "15",
	},
];

const Blog = () => {
	return (
		<BoxSize
			shadow={true}
			flexSize="2 0 100%"
			style={{ background: FadeMainGreen }}
		>
			<BoxHeader>Intersting to read</BoxHeader>
			<hr />
			<BoxParag color="black">
				In need to know more or just wanna read something intresting? We collect
				the best articles out there for you to enjoy
			</BoxParag>
			<BreakLine />
			<Flex justify="center">
				{articles.map((article) => (
					<BlogCard item={article} />
				))}
			</Flex>
		</BoxSize>
	);
};
export default Blog;
