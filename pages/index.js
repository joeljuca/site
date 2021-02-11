import Head from "next/head";

import { Heading } from "../components/heading";
import { Rainbow } from "../components/rainbow";
import { Welcome } from "../components/welcome";

export const Home = () => (
  <>
    <Head>
      <title>JJ: Welcome!</title>

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
          <h1 className="Welcome-title fs-1 fw-bold">Hi, I'm Joel!</h1>
          <p className="Welcome-subtitle fs-3 fw-light">
            I'm a <a href="https://github.com/joeljuca">software engineer</a>,{" "}
            mentor, and{" "}
            <a href="https://elug-ce.github.io">community manager</a>.
          </p>
        </main>
      </Welcome>
    </Heading>
  </>
);

export default Home;
