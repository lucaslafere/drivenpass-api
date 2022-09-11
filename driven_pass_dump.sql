--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: CardTypes; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."CardTypes" AS ENUM (
    'debit',
    'credit',
    'both'
);


ALTER TYPE public."CardTypes" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Cards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Cards" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    label text NOT NULL,
    "cardNumber" text NOT NULL,
    "cardHolderName" text NOT NULL,
    "securityCode" text NOT NULL,
    "expirationDate" character varying(5) NOT NULL,
    password text NOT NULL,
    "isVirtual" boolean DEFAULT false NOT NULL,
    type public."CardTypes" NOT NULL
);


ALTER TABLE public."Cards" OWNER TO postgres;

--
-- Name: Cards_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Cards_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Cards_id_seq" OWNER TO postgres;

--
-- Name: Cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Cards_id_seq" OWNED BY public."Cards".id;


--
-- Name: Credentials; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Credentials" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    label text NOT NULL,
    "userName" text NOT NULL,
    password text NOT NULL,
    url text NOT NULL
);


ALTER TABLE public."Credentials" OWNER TO postgres;

--
-- Name: Credentials_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Credentials_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Credentials_id_seq" OWNER TO postgres;

--
-- Name: Credentials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Credentials_id_seq" OWNED BY public."Credentials".id;


--
-- Name: SecureNotes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SecureNotes" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    title character varying(50) NOT NULL,
    note character varying(1000) NOT NULL
);


ALTER TABLE public."SecureNotes" OWNER TO postgres;

--
-- Name: SecureNotes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."SecureNotes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."SecureNotes_id_seq" OWNER TO postgres;

--
-- Name: SecureNotes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."SecureNotes_id_seq" OWNED BY public."SecureNotes".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Wifis; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Wifis" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    label text NOT NULL,
    "networkName" text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public."Wifis" OWNER TO postgres;

--
-- Name: Wifis_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Wifis_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Wifis_id_seq" OWNER TO postgres;

--
-- Name: Wifis_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Wifis_id_seq" OWNED BY public."Wifis".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Cards id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cards" ALTER COLUMN id SET DEFAULT nextval('public."Cards_id_seq"'::regclass);


--
-- Name: Credentials id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Credentials" ALTER COLUMN id SET DEFAULT nextval('public."Credentials_id_seq"'::regclass);


--
-- Name: SecureNotes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SecureNotes" ALTER COLUMN id SET DEFAULT nextval('public."SecureNotes_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: Wifis id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Wifis" ALTER COLUMN id SET DEFAULT nextval('public."Wifis_id_seq"'::regclass);


--
-- Data for Name: Cards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Cards" (id, "userId", label, "cardNumber", "cardHolderName", "securityCode", "expirationDate", password, "isVirtual", type) FROM stdin;
\.


--
-- Data for Name: Credentials; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Credentials" (id, "userId", label, "userName", password, url) FROM stdin;
\.


--
-- Data for Name: SecureNotes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SecureNotes" (id, "userId", title, note) FROM stdin;
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, email, password) FROM stdin;
1	laferelucas@gmail.com	$2b$10$533SHqGCSCmQFGaQXLYKKOD0kLm/iDvkhOSmR/WpjLsnl7l0sAefO
2	meulindoemail@gmail.com	$2b$10$XpWGQx399b.ezeiUgrHaNOiFedFnEIBQykj/gZFxNqRT9ErJyiWIm
\.


--
-- Data for Name: Wifis; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Wifis" (id, "userId", label, "networkName", password) FROM stdin;
2	2	meu wifi	meu-vizinho	8d55bdfeb7effc3628b9e0dee33f23f48d60610da26af279af2af5c94739b08d0652df8eb4d4d6a59c0bbe48b77a53cfd3355989010a5792dd506e62cd560a8a79ac6f76391e26da7db31da99cb4817d68f3482efda531ce925155ca107aae51247cb82752f22eababc0fc3224a08f
3	2	meu wifi	meu-vizinho	9457feb77aef1108d7769fc3ebcde0da2dff627c294477104fd5f50ef88e2785f0dd77bdbf8a231dd1cde3b1071dc8b203bef8278134a08f9da78f44142fed1c820d7e53b40b733c21770da05ffaf55466209ad59710035964d1385b80e8e28b6f514fc7b53561d97e5a4f40515820
4	2	meu wifi	meu-vizinho	90000b5dcb0a3a9da169885e963fdb984d0234a6f07fd5ca1e9ad78bdd03af5b917d90a46ccf83d262c71be5b605002237d3988eeb7c359b8133743d6af3a25dc2046ad6570e1078f6daf06547e3f484d372599af3b8cd14790b6cb5756052f119ffb0d7b0fc8f46727959017dbcb6
5	2	meu wifi	meu-vizinho	54cc581e943b7e121f56ead3ab08a294cfabc5e29864946918d35e79e2852fb1cc5c86b0b1626556328f6d43bad215b0a60d115a61410281c8f7f82308562cf82149ae0f03f08d613d246841487f9f358e26710b09d23fe2e680e1ae12ffd92aac49b96d952f46696f7ccd479ba362
6	2	meu wifi	meu-vizinho	a6a128cbdbcd20500f89a609c4ff058b2e543c68b0ae2d54b34e460e5a30c35f59982701f2d3e7b8e52b5c7d96e70d00a04ba4e1f995c646801c198da1f5c7bd599cf912a9df2804393dda4234dcd6bfddfc953d1b096813d48bd956bf195838ec81fb3fd00f6810730510fee947ea
7	2	meu wifi	meu-vizinho	e062e102ca5babebc1f5b40d60e423ae82550da0439b38768558271c96b639ec00953bfc41579e6ecd728816007b44b809368bb02f5f2f82585eaa4f9c146b34c0c5abeed9a5a3d06dd4d6a21189fba9e3603f32e1dc9408d2cfd5d9b6fe4028266ec47499c22b39f79d716dea0a6c
8	2	meu wifi	meu-vizinho	4dfab06e19ca71452d44f5840762df5b965c3fd66d4e8d55089888ef4a731eb24ab2b3951c4076b367f838dbc12f585a23ae3d5a521934f3a0613156db0c0df273ddb3b3a6fd4815786e9764eca43baf23c05c6adfa0b91c3967d2575b7f1c290cc1fe08e402e2bbd976173d7bbc84
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
48beafc1-2f60-4972-b533-8cd29c3727e0	eb54651fc6282c9a5575710d2aab6049b167728621fc642fc7db0545c3818e8f	2022-09-11 15:40:00.367284-03	20220911183959_create_full_database	\N	\N	2022-09-11 15:39:59.879617-03	1
d4fd03ea-16d3-4382-a2eb-c5896e69a360	fd30cc85c9dae66fa526febc4457a1955371e4c4c5ed4f9bea7bc6e6416c2719	2022-09-11 18:34:12.876068-03	20220911213412_changed_secure_notes_anotation_to_note	\N	\N	2022-09-11 18:34:12.841115-03	1
\.


--
-- Name: Cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Cards_id_seq"', 1, true);


--
-- Name: Credentials_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Credentials_id_seq"', 3, true);


--
-- Name: SecureNotes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."SecureNotes_id_seq"', 2, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 2, true);


--
-- Name: Wifis_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Wifis_id_seq"', 8, true);


--
-- Name: Cards Cards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cards"
    ADD CONSTRAINT "Cards_pkey" PRIMARY KEY (id);


--
-- Name: Credentials Credentials_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Credentials"
    ADD CONSTRAINT "Credentials_pkey" PRIMARY KEY (id);


--
-- Name: SecureNotes SecureNotes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SecureNotes"
    ADD CONSTRAINT "SecureNotes_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Wifis Wifis_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Wifis"
    ADD CONSTRAINT "Wifis_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Cards_userId_label_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Cards_userId_label_key" ON public."Cards" USING btree ("userId", label);


--
-- Name: Credentials_userId_label_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Credentials_userId_label_key" ON public."Credentials" USING btree ("userId", label);


--
-- Name: SecureNotes_title_userId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "SecureNotes_title_userId_key" ON public."SecureNotes" USING btree (title, "userId");


--
-- Name: Users_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Users_email_key" ON public."Users" USING btree (email);


--
-- Name: Cards Cards_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cards"
    ADD CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Credentials Credentials_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Credentials"
    ADD CONSTRAINT "Credentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SecureNotes SecureNotes_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SecureNotes"
    ADD CONSTRAINT "SecureNotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Wifis Wifis_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Wifis"
    ADD CONSTRAINT "Wifis_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

