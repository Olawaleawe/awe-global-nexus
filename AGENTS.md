# Architecture rules
- Keep the collaboration funding catalogue and response validation in the collaboration function directory and reuse them in the client and tests, so generated recommendations cannot invent funding links.
- The collaboration endpoint is intentionally public and returns only research advice; validate and bound all inputs before requesting AI suggestions.
- Keep freely downloadable materials in a dedicated catalogue separate from the ebook store, so adding a free resource cannot expose a paid book.