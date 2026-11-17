<!-- Start SDK Example Usage [usage] -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiStatement({
    idempotencyKey: "<value>",
    body: {
      source: "mercadopago_release",
      bankAccountId: "bbcc124e-2652-432f-b232-8423696c1640",
      periodStart: new Date("2025-09-28"),
      periodEnd: new Date("2025-09-10"),
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->