
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://192.168.0.122:3000/graphql",
  documents: "./location/**/*",
  generates: {
    "./graphql/": {
      preset: "client",
      plugins: [
         "typescript",
         "typescript-operations"
      ]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
