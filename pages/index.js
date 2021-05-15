import Head from "next/head";

import { A } from "../components/utils";
import { Heading } from "../components/heading";
import { Rainbow } from "../components/rainbow";
import { Welcome } from "../components/welcome";

export const Home = () => (
  <>
    <Head>
      <title>Welcome! - JJ.</title>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossOrigin="anonymous"
      />
    </Head>

    <Rainbow />

    <Heading>
      <Welcome>
        <main>
          <h1 className="Welcome-title fs-1 fw-bold">Welcome!</h1>
          <p className="Welcome-subtitle fs-3 fw-light">
            I'm <strong>Joel</strong> - a <strong>software engineer</strong> and{" "}
            <strong>educator</strong> from Fortaleza, BR 🇧🇷
          </p>
          <p className="fw-light text-muted">
            I write code on{" "}
            <A href="https://github.com/joeljuca" blank>
              GitHub
            </A>
            , essays about software engineering on{" "}
            <A
              href="https://joeljuca.substack.com"
              blank
              title="Thoughts about software engineering"
            >
              Substack
            </A>
            , and I run{" "}
            <A
              href="https://elug-ce.github.io"
              blank
              title="The local user group and meetup for Elixir and Erlang developers from Ceará, BR"
            >
              Elug CE
            </A>
            .
          </p>
        </main>
      </Welcome>
    </Heading>
  </>
);

export default Home;
