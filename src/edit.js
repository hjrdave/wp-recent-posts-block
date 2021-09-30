import React from 'react';
import Card from 'react-bootstrap/Card';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const [posts, setPosts] = React.useState([]);

	React.useEffect(() => {
		apiFetch({ path: '/wp/v2/posts' }).then((posts) => {
			setPosts(posts);
		});
	}, []);

	return (
		<div {...useBlockProps()}>
			{
				posts.map((post) => (
					<Card>
						<Card.Header>
							<small>Development</small>
						</Card.Header>
						<Card.Img variant="top" src="" />
						<Card.Body>
							<Card.Title>{post.title.rendered}</Card.Title>
							<Card.Subtitle>{post.date}</Card.Subtitle>
							<Card.Text>
								{post.excerpt.rendered}
							</Card.Text>
						</Card.Body>
					</Card>
				))
			}
		</div>
	);
}
