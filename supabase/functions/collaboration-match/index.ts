import { generateResponse, GatewayError } from "npm:@lovable.dev/ai-gateway";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PROFILE = `Prof. Olushina Olawale Awe: Professor of Statistics and Data Science.
Roles: Alexander von Humboldt Visiting Professor, PH Ludwigsburg (Germany); SaLLy Research Professor, UFBA (Brazil); Miva Distinguished Professor (Nigeria); Professor, Global Humanistic University (Curacao); Fellow RSS; ISI Council Member (2025-2029); VP of LISA 2020 Global Network and ISBIS; PStat (ASA), CStat (RSS).
Expertise: statistical learning under complex dependencies, time series (ARIMA selection), machine learning, explainable AI (SHAP, LIME, ICARM framework), civic and democratic data science, biostatistics, health and malaria modelling, statistical, data and AI literacy education, fraud detection ML (SentinelPay).
Software: R packages civic.icarm, icarm, arimasel, awe; Python packages icarm, awe-ml, arimasel-py.
Track record: 100+ publications, 14 graduate theses supervised (AIMS Cameroon, AIMS Senegal, Nigeria), 30+ invited talks, LISA 2020 network serving 9,400+ researchers in 15 countries, grants across DFG, ERC, NIH, USAID, World Bank style proposals.
Collaboration modes: joint research and co-authorship, grant proposals (DFG, ERC, Humboldt), PhD/MSc co-supervision, workshops and capacity building, statistical consulting, keynote talks, software co-development.`;

const schema = {
  type: "object",
  additionalProperties: false,
  required: ["summary", "expertise", "pathway", "funding", "firstStep"],
  properties: {
    summary: { type: "string" },
    expertise: {
      type: "array",
      items: {
        type: "object", additionalProperties: false, required: ["area", "relevance"],
        properties: { area: { type: "string" }, relevance: { type: "string" } },
      },
    },
    pathway: {
      type: "array",
      items: {
        type: "object", additionalProperties: false, required: ["stage", "detail"],
        properties: { stage: { type: "string" }, detail: { type: "string" } },
      },
    },
    funding: { type: "array", items: { type: "string" } },
    firstStep: { type: "string" },
  },
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  const json = (b: unknown, s = 200) =>
    new Response(JSON.stringify(b), { status: s, headers: { ...cors, "Content-Type": "application/json" } });
  try {
    const { goals, field, org } = await req.json();
    if (typeof goals !== "string" || goals.trim().length < 20 || goals.length > 3000) {
      return json({ error: "Please describe your research goals in 20 to 3000 characters." }, 400);
    }
    const res = await generateResponse({
      model: "openai/gpt-6-astra",
      instructions: `You advise prospective collaborators of the professor below. Using only this profile, match their goals to his most relevant expertise and propose a realistic, tailored collaboration pathway of 3 to 5 stages. Be specific and honest; if the fit is weak, say so. Write plainly, no em dashes, no hype.\n\n${PROFILE}`,
      input: `Field: ${field || "not given"}\nOrganisation: ${org || "not given"}\nResearch goals:\n${goals}`,
      text: { format: { type: "json_schema", name: "collaboration_match", strict: true, schema } },
    });
    // deno-lint-ignore no-explicit-any
    const out = (res as any).output ?? [];
    let text = "";
    for (const item of out) for (const c of item.content ?? []) if (c.type === "output_text") text += c.text;
    return json(JSON.parse(text));
  } catch (e) {
    console.error(e);
    if (e instanceof GatewayError) {
      const status = e.httpStatus === 429 ? 429 : e.httpStatus === 402 ? 402 : 502;
      return json({ error: status === 429 ? "Too many requests, please try again shortly." : "The suggestion service is unavailable right now." }, status);
    }
    return json({ error: "Something went wrong. Please try again." }, 500);
  }
});
