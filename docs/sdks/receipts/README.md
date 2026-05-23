# PurchaseOrders.Receipts

## Overview

### Available Operations

* [receive](#receive) - Recibir orden de compra

## receive

Registra la recepción de líneas de una orden de compra confirmada. Requiere Idempotency-Key.

Required scopes: `purchases:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="receiveApiPurchaseOrder" method="post" path="/api/v1/purchase-orders/{purchase_order_id}/receipts" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.purchaseOrders.receipts.receive({
    purchaseOrderId: "6decefdf-e162-4a52-9076-ac0a73aafada",
    idempotencyKey: "<value>",
    body: {
      items: [
        {
          purchaseOrderItemId: "b0341d4c-7de5-45de-aa0e-a864a815467a",
          productId: "eb9a9628-6285-4875-ae05-5a7e18daa21c",
          receivedQuantity: 426968,
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { purchaseOrdersReceiptsReceive } from "lapyme/funcs/purchase-orders-receipts-receive.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchaseOrdersReceiptsReceive(lapyme, {
    purchaseOrderId: "6decefdf-e162-4a52-9076-ac0a73aafada",
    idempotencyKey: "<value>",
    body: {
      items: [
        {
          purchaseOrderItemId: "b0341d4c-7de5-45de-aa0e-a864a815467a",
          productId: "eb9a9628-6285-4875-ae05-5a7e18daa21c",
          receivedQuantity: 426968,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchaseOrdersReceiptsReceive failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReceiveApiPurchaseOrderRequest](../../models/operations/receive-api-purchase-order-request.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ReceiveApiPurchaseOrderResponse](../../models/operations/receive-api-purchase-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |