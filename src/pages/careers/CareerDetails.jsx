import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
	const { id } = useParams();
	const career = useLoaderData();

	return (
		<div className="career-details">
			<h2>Career Details for {career.title}</h2>
			<p>Starting salary: {career.salary}</p>
			<p>Location: {career.location}</p>
			<div className="details">
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Dolores id maiores corrupti aspernatur nemo est rerum
					distinctio mollitia hic veritatis? Alias animi magnam itaque
					neque asperiores aliquid! Impedit vitae eum, magni autem
					obcaecati nihil voluptatibus corrupti excepturi at rerum
					minus iure. Eligendi, quia corporis nobis placeat architecto
					unde accusamus voluptas?
				</p>
			</div>
		</div>
	);
};

// loader function
export const careerDetailsLoader = async ({ params }) => {
	const { id } = params;

	const res = await fetch("http://localhost:4000/careers/" + id);

	return res.json();
};

export default CareerDetails;
