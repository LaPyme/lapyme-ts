<!-- Start SDK Example Usage [usage] -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.listApiSuppliers({});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->