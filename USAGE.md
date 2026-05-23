<!-- Start SDK Example Usage [usage] -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme();

async function run() {
  const result = await lapyme.healthCheck();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->