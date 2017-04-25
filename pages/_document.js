import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const { html, head } = renderPage();
		return { html, head };
	}

	render() {
		return (
			<html>
				<Head>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400|Nunito:200,300,400,800,900" />
					<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
					<link rel="stylesheet" href="/static/css/globals.css" />
				</Head>
				<body>
					{ this.props.customValue }
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}