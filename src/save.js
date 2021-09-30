import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			{/* <Card>
				<CardHeader>
					<small>Development</small>
				</CardHeader>
				<CardMedia></CardMedia>
				<CardBody>
					<h4>This is a Card Title</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare in dolor eu blandit. Integer molestie commodo turpis, eget pretium enim consequat at.</p>
				</CardBody>
			</Card> */}
		</div>
	)
}