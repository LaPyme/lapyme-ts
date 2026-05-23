# Api

## Overview

### Available Operations

* [listApiSuppliers](#listapisuppliers) - Listar proveedores
* [createApiSupplier](#createapisupplier) - Crear proveedor
* [getApiSupplier](#getapisupplier) - Obtener proveedor
* [updateApiSupplier](#updateapisupplier) - Actualizar proveedor
* [getApiCategory](#getapicategory) - Obtener categoría
* [updateApiCategory](#updateapicategory) - Actualizar categoría
* [createApiProductBulkAdjustment](#createapiproductbulkadjustment) - Ajustar productos en lote
* [getApiProductById](#getapiproductbyid) - Obtener producto por ID
* [updateApiProduct](#updateapiproduct) - Actualizar producto
* [getApiWarehouseById](#getapiwarehousebyid) - Obtener depósito por ID
* [updateApiWarehouse](#updateapiwarehouse) - Actualizar depósito
* [createApiPriceList](#createapipricelist) - Crear lista de precios
* [getApiPriceListById](#getapipricelistbyid) - Obtener lista de precios por ID
* [updateApiPriceList](#updateapipricelist) - Actualizar lista de precios
* [listApiPurchases](#listapipurchases) - Listar compras
* [createApiPurchase](#createapipurchase) - Crear compra
* [listApiStockTransfers](#listapistocktransfers) - Listar transferencias de stock
* [createApiStockTransfer](#createapistocktransfer) - Crear transferencia de stock
* [queryApiReport](#queryapireport) - Consultar reporte
* [getApiPurchaseById](#getapipurchasebyid) - Obtener compra por ID
* [listApiPurchaseOrders](#listapipurchaseorders) - Listar órdenes de compra
* [createApiPurchaseOrder](#createapipurchaseorder) - Crear orden de compra
* [getApiPurchaseOrderById](#getapipurchaseorderbyid) - Obtener orden de compra por ID
* [confirmApiPurchaseOrder](#confirmapipurchaseorder) - Confirmar orden de compra
* [closeApiPurchaseOrder](#closeapipurchaseorder) - Cerrar orden de compra
* [reopenApiPurchaseOrder](#reopenapipurchaseorder) - Reabrir orden de compra
* [receiveApiPurchaseOrder](#receiveapipurchaseorder) - Recibir orden de compra
* [listApiOrders](#listapiorders) - Listar pedidos
* [createApiOrder](#createapiorder) - Crear pedido
* [getApiOrderById](#getapiorderbyid) - Obtener pedido
* [patchApiOrder](#patchapiorder) - Actualizar notas del pedido
* [deleteApiArchivedOrder](#deleteapiarchivedorder) - Eliminar pedido archivado
* [completeApiOrder](#completeapiorder) - Completar pedido
* [cancelApiOrder](#cancelapiorder) - Cancelar pedido
* [prepareApiOrder](#prepareapiorder) - Preparar pedido
* [packageApiOrder](#packageapiorder) - Empaquetar pedido
* [unprepareApiOrder](#unprepareapiorder) - Revertir preparación del pedido
* [changeApiOrderFulfillmentLocation](#changeapiorderfulfillmentlocation) - Cambiar ubicación de preparación
* [unarchiveApiOrder](#unarchiveapiorder) - Desarchivar pedido
* [listApiOrderFulfillmentOrders](#listapiorderfulfillmentorders) - Listar órdenes de preparación del pedido
* [startApiFulfillmentOrder](#startapifulfillmentorder) - Iniciar orden de preparación
* [cancelApiFulfillmentOrder](#cancelapifulfillmentorder) - Cancelar orden de preparación
* [createApiFulfillment](#createapifulfillment) - Crear fulfillment
* [voidApiFulfillment](#voidapifulfillment) - Anular fulfillment
* [invoiceApiOrder](#invoiceapiorder) - Facturar pedido
* [getApiSaleById](#getapisalebyid) - Obtener venta por ID
* [getApiStockTransferById](#getapistocktransferbyid) - Obtener transferencia por ID
* [createApiStockMovement](#createapistockmovement) - Crear movimiento de stock
* [getApiCustomerById](#getapicustomerbyid) - Obtener cliente por ID
* [updateApiCustomer](#updateapicustomer) - Actualizar cliente
* [listApiTags](#listapitags) - Listar etiquetas
* [createApiTag](#createapitag) - Crear etiqueta
* [updateApiTag](#updateapitag) - Actualizar etiqueta
* [applyApiPurchaseTags](#applyapipurchasetags) - Aplicar etiquetas a compras
* [applyApiCustomerTags](#applyapicustomertags) - Aplicar etiquetas a clientes
* [applyApiSupplierTags](#applyapisuppliertags) - Aplicar etiquetas a proveedores
* [applyApiProductTags](#applyapiproducttags) - Aplicar etiquetas a productos
* [applyApiSaleTags](#applyapisaletags) - Aplicar etiquetas a ventas
* [listApiCustomerPayments](#listapicustomerpayments) - Listar cobranzas de clientes
* [createApiCustomerPayment](#createapicustomerpayment) - Crear cobranza de cliente
* [getApiCustomerPayment](#getapicustomerpayment) - Obtener cobranza de cliente
* [voidApiCustomerPayment](#voidapicustomerpayment) - Anular cobranza de cliente
* [listApiSupplierPayments](#listapisupplierpayments) - Listar pagos a proveedores
* [createApiSupplierPayment](#createapisupplierpayment) - Crear pago a proveedor
* [getApiSupplierPayment](#getapisupplierpayment) - Obtener pago a proveedor
* [voidApiSupplierPayment](#voidapisupplierpayment) - Anular pago a proveedor
* [getApiPaymentMethod](#getapipaymentmethod) - Obtener método de pago
* [updateApiPaymentMethod](#updateapipaymentmethod) - Actualizar método de pago
* [listApiPointsOfSale](#listapipointsofsale) - Listar puntos de venta
* [listApiInventory](#listapiinventory) - Consultar inventario por depósito
* [listApiInventoryMovements](#listapiinventorymovements) - Listar movimientos de inventario

## listApiSuppliers

Devuelve una lista de proveedores de la organización. Permite buscar por nombre, CUIT o email.

Required scopes: `suppliers:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiSuppliers" method="get" path="/api/v1/suppliers" -->
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

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiListAPISuppliers } from "lapyme/funcs/api-list-api-suppliers.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiListAPISuppliers(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiListAPISuppliers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiSuppliersRequest](../../models/operations/list-api-suppliers-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiSuppliersResponse](../../models/operations/list-api-suppliers-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## createApiSupplier

Crea un proveedor para usarlo en compras, cuentas corrientes y reportes.

Required scopes: `suppliers:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createApiSupplier" method="post" path="/api/v1/suppliers" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiSupplier({
    idempotencyKey: "<value>",
    body: {
      name: "<value>",
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
import { apiCreateAPISupplier } from "lapyme/funcs/api-create-api-supplier.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPISupplier(lapyme, {
    idempotencyKey: "<value>",
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPISupplier failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiSupplierRequest](../../models/operations/create-api-supplier-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiSupplierResponse](../../models/operations/create-api-supplier-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getApiSupplier

Devuelve los datos de un proveedor por ID.

Required scopes: `suppliers:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiSupplier" method="get" path="/api/v1/suppliers/{supplier_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.getApiSupplier({
    supplierId: "1492f999-880f-4783-b990-92a100eb21e1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiGetAPISupplier } from "lapyme/funcs/api-get-api-supplier.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiGetAPISupplier(lapyme, {
    supplierId: "1492f999-880f-4783-b990-92a100eb21e1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiGetAPISupplier failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiSupplierRequest](../../models/operations/get-api-supplier-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiSupplierResponse](../../models/operations/get-api-supplier-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## updateApiSupplier

Actualiza los datos comerciales, fiscales y de contacto de un proveedor.

Required scopes: `suppliers:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateApiSupplier" method="put" path="/api/v1/suppliers/{supplier_id}" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.updateApiSupplier({
    supplierId: "74ea1ee8-72f6-4534-b8a9-c8e989d8e0e0",
    idempotencyKey: "<value>",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiUpdateAPISupplier } from "lapyme/funcs/api-update-api-supplier.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiUpdateAPISupplier(lapyme, {
    supplierId: "74ea1ee8-72f6-4534-b8a9-c8e989d8e0e0",
    idempotencyKey: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiUpdateAPISupplier failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateApiSupplierRequest](../../models/operations/update-api-supplier-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateApiSupplierResponse](../../models/operations/update-api-supplier-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getApiCategory

Devuelve una categoría por ID.

Required scopes: `categories:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiCategory" method="get" path="/api/v1/categories/{category_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.getApiCategory({
    categoryId: "43eaa6fb-3b3b-4b64-a2a8-934d4b46ce6b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiGetAPICategory } from "lapyme/funcs/api-get-api-category.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiGetAPICategory(lapyme, {
    categoryId: "43eaa6fb-3b3b-4b64-a2a8-934d4b46ce6b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiGetAPICategory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiCategoryRequest](../../models/operations/get-api-category-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiCategoryResponse](../../models/operations/get-api-category-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## updateApiCategory

Actualiza el nombre, la categoría padre o la actividad económica de una categoría.

Required scopes: `categories:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateApiCategory" method="put" path="/api/v1/categories/{category_id}" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.updateApiCategory({
    categoryId: "106d68a2-b301-4c38-b4f3-2f97500463fb",
    idempotencyKey: "<value>",
    body: {
      name: "<value>",
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
import { apiUpdateAPICategory } from "lapyme/funcs/api-update-api-category.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiUpdateAPICategory(lapyme, {
    categoryId: "106d68a2-b301-4c38-b4f3-2f97500463fb",
    idempotencyKey: "<value>",
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiUpdateAPICategory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateApiCategoryRequest](../../models/operations/update-api-category-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateApiCategoryResponse](../../models/operations/update-api-category-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## createApiProductBulkAdjustment

Aplica ajustes masivos de costo o precio base sobre una selección de productos.

Required scopes: `products:write`.

### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="createApiProductBulkAdjustment" method="post" path="/api/v1/products/bulk-adjustments" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiProductBulkAdjustment({
    idempotencyKey: "<value>",
    body: {
      target: "price",
      operationType: "increase",
      adjustmentType: "percentage",
      adjustmentValue: 7125.57,
      selection: {
        type: "specific",
        ids: [
          "2c4fe136-10f0-46a3-bebc-3a3de17ba5bd",
        ],
      },
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
import { apiCreateAPIProductBulkAdjustment } from "lapyme/funcs/api-create-api-product-bulk-adjustment.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPIProductBulkAdjustment(lapyme, {
    idempotencyKey: "<value>",
    body: {
      target: "price",
      operationType: "increase",
      adjustmentType: "percentage",
      adjustmentValue: 7125.57,
      selection: {
        type: "specific",
        ids: [
          "2c4fe136-10f0-46a3-bebc-3a3de17ba5bd",
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPIProductBulkAdjustment failed:", res.error);
  }
}

run();
```
### Example Usage: supplierCostIncrease

<!-- UsageSnippet language="typescript" operationID="createApiProductBulkAdjustment" method="post" path="/api/v1/products/bulk-adjustments" example="supplierCostIncrease" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiProductBulkAdjustment({
    idempotencyKey: "<value>",
    body: {
      target: "cost",
      operationType: "increase",
      adjustmentType: "percentage",
      adjustmentValue: 5,
      defaultSupplierId: "550e8400-e29b-41d4-a716-446655440201",
      selection: {
        type: "all",
        excludedIds: [],
      },
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
import { apiCreateAPIProductBulkAdjustment } from "lapyme/funcs/api-create-api-product-bulk-adjustment.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPIProductBulkAdjustment(lapyme, {
    idempotencyKey: "<value>",
    body: {
      target: "cost",
      operationType: "increase",
      adjustmentType: "percentage",
      adjustmentValue: 5,
      defaultSupplierId: "550e8400-e29b-41d4-a716-446655440201",
      selection: {
        type: "all",
        excludedIds: [],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPIProductBulkAdjustment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiProductBulkAdjustmentRequest](../../models/operations/create-api-product-bulk-adjustment-request.md)                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiProductBulkAdjustmentResponse](../../models/operations/create-api-product-bulk-adjustment-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 409        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getApiProductById

Devuelve el detalle persistido del producto.

Required scopes: `products:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiProductById" method="get" path="/api/v1/products/{product_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.getApiProductById({
    productId: "87619507-5b02-4034-8550-8826df69ee5a",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiGetAPIProductById } from "lapyme/funcs/api-get-api-product-by-id.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiGetAPIProductById(lapyme, {
    productId: "87619507-5b02-4034-8550-8826df69ee5a",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiGetAPIProductById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiProductByIdRequest](../../models/operations/get-api-product-by-id-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiProductByIdResponse](../../models/operations/get-api-product-by-id-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## updateApiProduct

Actualiza un producto y devuelve el detalle persistido.

Required scopes: `products:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateApiProduct" method="put" path="/api/v1/products/{product_id}" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.updateApiProduct({
    productId: "74c5622b-6bc0-45c8-802e-577e76a3b0d0",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiUpdateAPIProduct } from "lapyme/funcs/api-update-api-product.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiUpdateAPIProduct(lapyme, {
    productId: "74c5622b-6bc0-45c8-802e-577e76a3b0d0",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiUpdateAPIProduct failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateApiProductRequest](../../models/operations/update-api-product-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateApiProductResponse](../../models/operations/update-api-product-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getApiWarehouseById

Devuelve el detalle del depósito.

Required scopes: `warehouses:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiWarehouseById" method="get" path="/api/v1/warehouses/{warehouse_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.getApiWarehouseById({
    warehouseId: "c17381e3-05e7-4975-8894-3418c540d411",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiGetAPIWarehouseById } from "lapyme/funcs/api-get-api-warehouse-by-id.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiGetAPIWarehouseById(lapyme, {
    warehouseId: "c17381e3-05e7-4975-8894-3418c540d411",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiGetAPIWarehouseById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiWarehouseByIdRequest](../../models/operations/get-api-warehouse-by-id-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiWarehouseByIdResponse](../../models/operations/get-api-warehouse-by-id-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## updateApiWarehouse

Actualiza un depósito y devuelve el detalle persistido.

Required scopes: `warehouses:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateApiWarehouse" method="put" path="/api/v1/warehouses/{warehouse_id}" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.updateApiWarehouse({
    warehouseId: "3a299c42-c225-44b7-a2ef-8927cb15b9a9",
    body: {
      name: "<value>",
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
import { apiUpdateAPIWarehouse } from "lapyme/funcs/api-update-api-warehouse.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiUpdateAPIWarehouse(lapyme, {
    warehouseId: "3a299c42-c225-44b7-a2ef-8927cb15b9a9",
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiUpdateAPIWarehouse failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateApiWarehouseRequest](../../models/operations/update-api-warehouse-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateApiWarehouseResponse](../../models/operations/update-api-warehouse-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## createApiPriceList

Crea una lista de precios para vender con reglas y valores comerciales diferenciados.

Required scopes: `price_lists:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createApiPriceList" method="post" path="/api/v1/price-lists" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiPriceList({
    idempotencyKey: "<value>",
    body: {
      name: "<value>",
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
import { apiCreateAPIPriceList } from "lapyme/funcs/api-create-api-price-list.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPIPriceList(lapyme, {
    idempotencyKey: "<value>",
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPIPriceList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiPriceListRequest](../../models/operations/create-api-price-list-request.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiPriceListResponse](../../models/operations/create-api-price-list-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 409        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getApiPriceListById

Devuelve el detalle de la lista de precios.

Required scopes: `price_lists:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiPriceListById" method="get" path="/api/v1/price-lists/{price_list_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.getApiPriceListById({
    priceListId: "65f14589-07bb-4a1f-b411-cbf30c6616e1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiGetAPIPriceListById } from "lapyme/funcs/api-get-api-price-list-by-id.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiGetAPIPriceListById(lapyme, {
    priceListId: "65f14589-07bb-4a1f-b411-cbf30c6616e1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiGetAPIPriceListById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiPriceListByIdRequest](../../models/operations/get-api-price-list-by-id-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiPriceListByIdResponse](../../models/operations/get-api-price-list-by-id-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## updateApiPriceList

Actualiza una lista de precios y devuelve el detalle persistido, incluyendo si se disparó la sincronización de precios.

Required scopes: `price_lists:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateApiPriceList" method="put" path="/api/v1/price-lists/{price_list_id}" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.updateApiPriceList({
    priceListId: "7d551ebf-a140-4a50-96e2-83d830336188",
    body: {
      name: "<value>",
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
import { apiUpdateAPIPriceList } from "lapyme/funcs/api-update-api-price-list.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiUpdateAPIPriceList(lapyme, {
    priceListId: "7d551ebf-a140-4a50-96e2-83d830336188",
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiUpdateAPIPriceList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateApiPriceListRequest](../../models/operations/update-api-price-list-request.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateApiPriceListResponse](../../models/operations/update-api-price-list-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## listApiPurchases

Lista las compras de la organización. Soporta filtros por fecha, importe y búsqueda de proveedor.

Required scopes: `purchases:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiPurchases" method="get" path="/api/v1/purchases" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.listApiPurchases({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiListAPIPurchases } from "lapyme/funcs/api-list-api-purchases.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiListAPIPurchases(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiListAPIPurchases failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiPurchasesRequest](../../models/operations/list-api-purchases-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiPurchasesResponse](../../models/operations/list-api-purchases-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## createApiPurchase

Registra una compra y devuelve la operación creada junto con sus efectos de stock y contabilidad.

Required scopes: `purchases:write`.

### Example Usage: created

<!-- UsageSnippet language="typescript" operationID="createApiPurchase" method="post" path="/api/v1/purchases" example="created" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiPurchase({
    idempotencyKey: "<value>",
    body: {
      voucherType: 51105,
      currency: "PES",
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
import { apiCreateAPIPurchase } from "lapyme/funcs/api-create-api-purchase.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPIPurchase(lapyme, {
    idempotencyKey: "<value>",
    body: {
      voucherType: 51105,
      currency: "PES",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPIPurchase failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="createApiPurchase" method="post" path="/api/v1/purchases" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiPurchase({
    idempotencyKey: "<value>",
    body: {
      voucherType: 51105,
      currency: "PES",
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
import { apiCreateAPIPurchase } from "lapyme/funcs/api-create-api-purchase.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPIPurchase(lapyme, {
    idempotencyKey: "<value>",
    body: {
      voucherType: 51105,
      currency: "PES",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPIPurchase failed:", res.error);
  }
}

run();
```
### Example Usage: purchase_with_receipt

<!-- UsageSnippet language="typescript" operationID="createApiPurchase" method="post" path="/api/v1/purchases" example="purchase_with_receipt" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiPurchase({
    idempotencyKey: "<value>",
    body: {
      supplierId: "afafcbec-9d94-4174-8d5c-ec8d72780947",
      voucherType: 1,
      supplierInvoiceNumber: "0001-00000002",
      invoiceDate: new Date("2026-03-10"),
      warehouseId: "550e8400-e29b-41d4-a716-446655440010",
      productsReceived: true,
      updateProductVariantCost: true,
      items: [
        {
          productId: "9c692e8b-0f9a-4f7c-8b99-061a2eb188ae",
          quantity: 3,
          unitCost: 8250,
          taxRateId: 5,
        },
      ],
      currency: "PES",
      exchangeRate: 1,
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
import { apiCreateAPIPurchase } from "lapyme/funcs/api-create-api-purchase.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPIPurchase(lapyme, {
    idempotencyKey: "<value>",
    body: {
      supplierId: "afafcbec-9d94-4174-8d5c-ec8d72780947",
      voucherType: 1,
      supplierInvoiceNumber: "0001-00000002",
      invoiceDate: new Date("2026-03-10"),
      warehouseId: "550e8400-e29b-41d4-a716-446655440010",
      productsReceived: true,
      updateProductVariantCost: true,
      items: [
        {
          productId: "9c692e8b-0f9a-4f7c-8b99-061a2eb188ae",
          quantity: 3,
          unitCost: 8250,
          taxRateId: 5,
        },
      ],
      currency: "PES",
      exchangeRate: 1,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPIPurchase failed:", res.error);
  }
}

run();
```
### Example Usage: purchase_without_receipt

<!-- UsageSnippet language="typescript" operationID="createApiPurchase" method="post" path="/api/v1/purchases" example="purchase_without_receipt" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiPurchase({
    idempotencyKey: "<value>",
    body: {
      supplierId: "afafcbec-9d94-4174-8d5c-ec8d72780947",
      voucherType: 1,
      supplierInvoiceNumber: "0001-00000001",
      invoiceDate: new Date("2026-03-10"),
      productsReceived: false,
      updateProductVariantCost: true,
      items: [
        {
          productId: "9c692e8b-0f9a-4f7c-8b99-061a2eb188ae",
          quantity: 1,
          unitCost: 8250,
          taxRateId: 5,
        },
      ],
      currency: "PES",
      exchangeRate: 1,
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
import { apiCreateAPIPurchase } from "lapyme/funcs/api-create-api-purchase.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPIPurchase(lapyme, {
    idempotencyKey: "<value>",
    body: {
      supplierId: "afafcbec-9d94-4174-8d5c-ec8d72780947",
      voucherType: 1,
      supplierInvoiceNumber: "0001-00000001",
      invoiceDate: new Date("2026-03-10"),
      productsReceived: false,
      updateProductVariantCost: true,
      items: [
        {
          productId: "9c692e8b-0f9a-4f7c-8b99-061a2eb188ae",
          quantity: 1,
          unitCost: 8250,
          taxRateId: 5,
        },
      ],
      currency: "PES",
      exchangeRate: 1,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPIPurchase failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiPurchaseRequest](../../models/operations/create-api-purchase-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiPurchaseResponse](../../models/operations/create-api-purchase-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 409, 412   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## listApiStockTransfers

Lista las transferencias de stock de la organización con filtros por fecha, estado y depósitos.

Required scopes: `transfers:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiStockTransfers" method="get" path="/api/v1/stock-transfers" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.listApiStockTransfers({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiListAPIStockTransfers } from "lapyme/funcs/api-list-api-stock-transfers.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiListAPIStockTransfers(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiListAPIStockTransfers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiStockTransfersRequest](../../models/operations/list-api-stock-transfers-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiStockTransfersResponse](../../models/operations/list-api-stock-transfers-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## createApiStockTransfer

Crea una transferencia para mover productos entre depósitos.

Required scopes: `transfers:write`.

### Example Usage: created

<!-- UsageSnippet language="typescript" operationID="createApiStockTransfer" method="post" path="/api/v1/stock-transfers" example="created" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiStockTransfer({
    body: {
      sourceWarehouseId: "da9ef71c-50f9-47ff-a040-9b9aadc837a3",
      targetWarehouseId: "93b766d2-9e75-44c4-bc54-dd6d4965951e",
      transferDate: new Date("2025-07-04T06:10:53.551Z"),
      items: [],
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
import { apiCreateAPIStockTransfer } from "lapyme/funcs/api-create-api-stock-transfer.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPIStockTransfer(lapyme, {
    body: {
      sourceWarehouseId: "da9ef71c-50f9-47ff-a040-9b9aadc837a3",
      targetWarehouseId: "93b766d2-9e75-44c4-bc54-dd6d4965951e",
      transferDate: new Date("2025-07-04T06:10:53.551Z"),
      items: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPIStockTransfer failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="createApiStockTransfer" method="post" path="/api/v1/stock-transfers" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiStockTransfer({
    body: {
      sourceWarehouseId: "da9ef71c-50f9-47ff-a040-9b9aadc837a3",
      targetWarehouseId: "93b766d2-9e75-44c4-bc54-dd6d4965951e",
      transferDate: new Date("2025-07-04T06:10:53.551Z"),
      items: [],
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
import { apiCreateAPIStockTransfer } from "lapyme/funcs/api-create-api-stock-transfer.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPIStockTransfer(lapyme, {
    body: {
      sourceWarehouseId: "da9ef71c-50f9-47ff-a040-9b9aadc837a3",
      targetWarehouseId: "93b766d2-9e75-44c4-bc54-dd6d4965951e",
      transferDate: new Date("2025-07-04T06:10:53.551Z"),
      items: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPIStockTransfer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiStockTransferRequest](../../models/operations/create-api-stock-transfer-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiStockTransferResponse](../../models/operations/create-api-stock-transfer-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## queryApiReport

Ejecuta una consulta analítica agrupada sobre ventas, compras, pagos o inventario. El campo `source` determina qué dimensiones y métricas están disponibles.

Required scopes: `reports:read`.

### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="queryApiReport" method="post" path="/api/v1/reports/query" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.queryApiReport({
    source: "payments",
    period: {
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-03-31"),
    },
    measures: [
      "paymentSplitCount",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiQueryAPIReport } from "lapyme/funcs/api-query-api-report.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiQueryAPIReport(lapyme, {
    source: "payments",
    period: {
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-03-31"),
    },
    measures: [
      "paymentSplitCount",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiQueryAPIReport failed:", res.error);
  }
}

run();
```
### Example Usage: inventory_snapshot

<!-- UsageSnippet language="typescript" operationID="queryApiReport" method="post" path="/api/v1/reports/query" example="inventory_snapshot" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.queryApiReport({
    source: "inventory",
    dimensions: [
      "product",
      "warehouse",
    ],
    measures: [
      "daysOfInventoryRemaining",
      "endingInventoryUnits",
    ],
    dateBasis: "commercial",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiQueryAPIReport } from "lapyme/funcs/api-query-api-report.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiQueryAPIReport(lapyme, {
    source: "inventory",
    dimensions: [
      "product",
      "warehouse",
    ],
    measures: [
      "daysOfInventoryRemaining",
      "endingInventoryUnits",
    ],
    dateBasis: "commercial",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiQueryAPIReport failed:", res.error);
  }
}

run();
```
### Example Usage: payments_by_method

<!-- UsageSnippet language="typescript" operationID="queryApiReport" method="post" path="/api/v1/reports/query" example="payments_by_method" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.queryApiReport({
    source: "payments",
    period: {
      startDate: new Date("2026-03-01"),
      endDate: new Date("2026-03-31"),
    },
    dimensions: [
      "paymentContactName",
    ],
    measures: [
      "paymentBalance",
      "paymentNetCashflow",
      "avgPaymentAmount",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiQueryAPIReport } from "lapyme/funcs/api-query-api-report.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiQueryAPIReport(lapyme, {
    source: "payments",
    period: {
      startDate: new Date("2026-03-01"),
      endDate: new Date("2026-03-31"),
    },
    dimensions: [
      "paymentContactName",
    ],
    measures: [
      "paymentBalance",
      "paymentNetCashflow",
      "avgPaymentAmount",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiQueryAPIReport failed:", res.error);
  }
}

run();
```
### Example Usage: purchases_by_supplier

<!-- UsageSnippet language="typescript" operationID="queryApiReport" method="post" path="/api/v1/reports/query" example="purchases_by_supplier" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.queryApiReport({
    source: "purchases",
    period: {
      startDate: new Date("2026-03-01"),
      endDate: new Date("2026-03-31"),
    },
    dimensions: [
      "supplier",
    ],
    measures: [
      "uniqueSuppliers",
      "purchaseCount",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiQueryAPIReport } from "lapyme/funcs/api-query-api-report.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiQueryAPIReport(lapyme, {
    source: "purchases",
    period: {
      startDate: new Date("2026-03-01"),
      endDate: new Date("2026-03-31"),
    },
    dimensions: [
      "supplier",
    ],
    measures: [
      "uniqueSuppliers",
      "purchaseCount",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiQueryAPIReport failed:", res.error);
  }
}

run();
```
### Example Usage: sales_by_product

<!-- UsageSnippet language="typescript" operationID="queryApiReport" method="post" path="/api/v1/reports/query" example="sales_by_product" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.queryApiReport({
    source: "sales",
    period: {
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-03-31"),
    },
    dimensions: [
      "product",
    ],
    measures: [
      "total",
      "units",
      "count",
    ],
    includeTotals: true,
    dateBasis: "commercial",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiQueryAPIReport } from "lapyme/funcs/api-query-api-report.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiQueryAPIReport(lapyme, {
    source: "sales",
    period: {
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-03-31"),
    },
    dimensions: [
      "product",
    ],
    measures: [
      "total",
      "units",
      "count",
    ],
    includeTotals: true,
    dateBasis: "commercial",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiQueryAPIReport failed:", res.error);
  }
}

run();
```
### Example Usage: sales_example

<!-- UsageSnippet language="typescript" operationID="queryApiReport" method="post" path="/api/v1/reports/query" example="sales_example" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.queryApiReport({
    source: "purchases",
    period: {
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-03-31"),
    },
    measures: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiQueryAPIReport } from "lapyme/funcs/api-query-api-report.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiQueryAPIReport(lapyme, {
    source: "purchases",
    period: {
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-03-31"),
    },
    measures: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiQueryAPIReport failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ReportRequest](../../models/report-request.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.QueryApiReportResponse](../../models/operations/query-api-report-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getApiPurchaseById

Devuelve el detalle de la compra.

Required scopes: `purchases:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiPurchaseById" method="get" path="/api/v1/purchases/{purchase_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.getApiPurchaseById({
    purchaseId: "636ff420-e532-471b-a7a6-9fbe903f6366",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiGetAPIPurchaseById } from "lapyme/funcs/api-get-api-purchase-by-id.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiGetAPIPurchaseById(lapyme, {
    purchaseId: "636ff420-e532-471b-a7a6-9fbe903f6366",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiGetAPIPurchaseById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiPurchaseByIdRequest](../../models/operations/get-api-purchase-by-id-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiPurchaseByIdResponse](../../models/operations/get-api-purchase-by-id-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 401, 403, 404             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## listApiPurchaseOrders

Lista las órdenes de compra de la organización. Soporta búsqueda por proveedor o número de orden y filtros por fecha y estado.

Required scopes: `purchases:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiPurchaseOrders" method="get" path="/api/v1/purchase-orders" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.listApiPurchaseOrders({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiListAPIPurchaseOrders } from "lapyme/funcs/api-list-api-purchase-orders.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiListAPIPurchaseOrders(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiListAPIPurchaseOrders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiPurchaseOrdersRequest](../../models/operations/list-api-purchase-orders-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiPurchaseOrdersResponse](../../models/operations/list-api-purchase-orders-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## createApiPurchaseOrder

Crea una orden de compra en borrador. Requiere Idempotency-Key.

Required scopes: `purchases:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createApiPurchaseOrder" method="post" path="/api/v1/purchase-orders" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiPurchaseOrder({
    idempotencyKey: "<value>",
    body: {
      supplierId: "1e51f064-4330-4a69-adbb-b91ffc3302dc",
      orderDate: new Date("2025-04-26"),
      warehouseId: "dad30d25-5038-45df-abc8-bf512fd5576e",
      items: [
        {
          productId: "114e58be-fa26-4023-9d7a-350e48a27ded",
          orderedQuantity: 7077.91,
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
import { apiCreateAPIPurchaseOrder } from "lapyme/funcs/api-create-api-purchase-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPIPurchaseOrder(lapyme, {
    idempotencyKey: "<value>",
    body: {
      supplierId: "1e51f064-4330-4a69-adbb-b91ffc3302dc",
      orderDate: new Date("2025-04-26"),
      warehouseId: "dad30d25-5038-45df-abc8-bf512fd5576e",
      items: [
        {
          productId: "114e58be-fa26-4023-9d7a-350e48a27ded",
          orderedQuantity: 7077.91,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPIPurchaseOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiPurchaseOrderRequest](../../models/operations/create-api-purchase-order-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiPurchaseOrderResponse](../../models/operations/create-api-purchase-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getApiPurchaseOrderById

Devuelve el detalle de una orden de compra.

Required scopes: `purchases:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiPurchaseOrderById" method="get" path="/api/v1/purchase-orders/{purchase_order_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.getApiPurchaseOrderById({
    purchaseOrderId: "9efeae6e-2cd3-4174-9cc5-6e6a7aaf57ea",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiGetAPIPurchaseOrderById } from "lapyme/funcs/api-get-api-purchase-order-by-id.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiGetAPIPurchaseOrderById(lapyme, {
    purchaseOrderId: "9efeae6e-2cd3-4174-9cc5-6e6a7aaf57ea",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiGetAPIPurchaseOrderById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiPurchaseOrderByIdRequest](../../models/operations/get-api-purchase-order-by-id-request.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiPurchaseOrderByIdResponse](../../models/operations/get-api-purchase-order-by-id-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## confirmApiPurchaseOrder

Confirma una orden de compra y devuelve el detalle persistido.

Required scopes: `purchases:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="confirmApiPurchaseOrder" method="post" path="/api/v1/purchase-orders/{purchase_order_id}/confirm" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.confirmApiPurchaseOrder({
    purchaseOrderId: "a0cea78d-42be-4492-b78d-ba55e81483e8",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiConfirmAPIPurchaseOrder } from "lapyme/funcs/api-confirm-api-purchase-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiConfirmAPIPurchaseOrder(lapyme, {
    purchaseOrderId: "a0cea78d-42be-4492-b78d-ba55e81483e8",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiConfirmAPIPurchaseOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConfirmApiPurchaseOrderRequest](../../models/operations/confirm-api-purchase-order-request.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ConfirmApiPurchaseOrderResponse](../../models/operations/confirm-api-purchase-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## closeApiPurchaseOrder

Cierra una orden de compra y devuelve el detalle persistido.

Required scopes: `purchases:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="closeApiPurchaseOrder" method="post" path="/api/v1/purchase-orders/{purchase_order_id}/close" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.closeApiPurchaseOrder({
    purchaseOrderId: "513ab138-4ba0-4010-91c9-31e687380ce2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiCloseAPIPurchaseOrder } from "lapyme/funcs/api-close-api-purchase-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCloseAPIPurchaseOrder(lapyme, {
    purchaseOrderId: "513ab138-4ba0-4010-91c9-31e687380ce2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCloseAPIPurchaseOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CloseApiPurchaseOrderRequest](../../models/operations/close-api-purchase-order-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CloseApiPurchaseOrderResponse](../../models/operations/close-api-purchase-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## reopenApiPurchaseOrder

Reabre una orden de compra cerrada y devuelve el detalle persistido.

Required scopes: `purchases:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="reopenApiPurchaseOrder" method="post" path="/api/v1/purchase-orders/{purchase_order_id}/reopen" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.reopenApiPurchaseOrder({
    purchaseOrderId: "e5952745-39e4-40d9-9061-3858543aa4dd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiReopenAPIPurchaseOrder } from "lapyme/funcs/api-reopen-api-purchase-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiReopenAPIPurchaseOrder(lapyme, {
    purchaseOrderId: "e5952745-39e4-40d9-9061-3858543aa4dd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiReopenAPIPurchaseOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReopenApiPurchaseOrderRequest](../../models/operations/reopen-api-purchase-order-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ReopenApiPurchaseOrderResponse](../../models/operations/reopen-api-purchase-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## receiveApiPurchaseOrder

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
  const result = await lapyme.api.receiveApiPurchaseOrder({
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
import { apiReceiveAPIPurchaseOrder } from "lapyme/funcs/api-receive-api-purchase-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiReceiveAPIPurchaseOrder(lapyme, {
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
    console.log("apiReceiveAPIPurchaseOrder failed:", res.error);
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

## listApiOrders

Lista pedidos de comercio con paginación por cursor. No expone page, offset, total ni total_pages.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiOrders" method="get" path="/api/v1/orders" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.listApiOrders({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiListAPIOrders } from "lapyme/funcs/api-list-api-orders.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiListAPIOrders(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiListAPIOrders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiOrdersRequest](../../models/operations/list-api-orders-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiOrdersResponse](../../models/operations/list-api-orders-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## createApiOrder

Crea un pedido de comercio y su trabajo inicial de preparación. Requiere Idempotency-Key.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createApiOrder" method="post" path="/api/v1/orders" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiOrder({
    idempotencyKey: "<value>",
    body: {
      customerId: "2bfbf716-33ab-4708-bf35-5873e33ea4a5",
      assignedWarehouseId: "b92af079-32d3-4e0e-b22e-848a208e6eb4",
      totals: {
        subtotal: 898897,
        taxAmount: 399499,
        total: 513425,
      },
      lines: [
        {
          productNameSnapshot: "<value>",
          skuSnapshot: "<value>",
          orderedQuantity: 958317,
          unitPrice: 202488,
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
import { apiCreateAPIOrder } from "lapyme/funcs/api-create-api-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPIOrder(lapyme, {
    idempotencyKey: "<value>",
    body: {
      customerId: "2bfbf716-33ab-4708-bf35-5873e33ea4a5",
      assignedWarehouseId: "b92af079-32d3-4e0e-b22e-848a208e6eb4",
      totals: {
        subtotal: 898897,
        taxAmount: 399499,
        total: 513425,
      },
      lines: [
        {
          productNameSnapshot: "<value>",
          skuSnapshot: "<value>",
          orderedQuantity: 958317,
          unitPrice: 202488,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPIOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiOrderRequest](../../models/operations/create-api-order-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiOrderResponse](../../models/operations/create-api-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getApiOrderById

Devuelve el detalle persistido de un pedido de comercio.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiOrderById" method="get" path="/api/v1/orders/{order_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.getApiOrderById({
    orderId: "4b4b6f08-280b-4d34-b8ce-dcb1b39de913",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiGetAPIOrderById } from "lapyme/funcs/api-get-api-order-by-id.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiGetAPIOrderById(lapyme, {
    orderId: "4b4b6f08-280b-4d34-b8ce-dcb1b39de913",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiGetAPIOrderById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiOrderByIdRequest](../../models/operations/get-api-order-by-id-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiOrderByIdResponse](../../models/operations/get-api-order-by-id-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## patchApiOrder

Actualiza las notas del pedido sin modificar importes, líneas ni estados.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchApiOrder" method="patch" path="/api/v1/orders/{order_id}" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.patchApiOrder({
    orderId: "4215e3ef-aa36-4811-9591-5f0e07da2262",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiPatchAPIOrder } from "lapyme/funcs/api-patch-api-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiPatchAPIOrder(lapyme, {
    orderId: "4215e3ef-aa36-4811-9591-5f0e07da2262",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiPatchAPIOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchApiOrderRequest](../../models/operations/patch-api-order-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchApiOrderResponse](../../models/operations/patch-api-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## deleteApiArchivedOrder

Elimina únicamente pedidos archivados; la validación de estado vive en la capability de commerce.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteApiArchivedOrder" method="delete" path="/api/v1/orders/{order_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.deleteApiArchivedOrder({
    orderId: "f4c1f131-8c25-4e4b-9b25-46aec5cd2398",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiDeleteAPIArchivedOrder } from "lapyme/funcs/api-delete-api-archived-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiDeleteAPIArchivedOrder(lapyme, {
    orderId: "f4c1f131-8c25-4e4b-9b25-46aec5cd2398",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiDeleteAPIArchivedOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteApiArchivedOrderRequest](../../models/operations/delete-api-archived-order-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteApiArchivedOrderResponse](../../models/operations/delete-api-archived-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## completeApiOrder

Completar pedido

### Example Usage

<!-- UsageSnippet language="typescript" operationID="completeApiOrder" method="post" path="/api/v1/orders/{order_id}/complete" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.completeApiOrder({
    orderId: "241d9146-e431-4f6c-baa1-cc5041daa3bc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiCompleteAPIOrder } from "lapyme/funcs/api-complete-api-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCompleteAPIOrder(lapyme, {
    orderId: "241d9146-e431-4f6c-baa1-cc5041daa3bc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCompleteAPIOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CompleteApiOrderRequest](../../models/operations/complete-api-order-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CompleteApiOrderResponse](../../models/operations/complete-api-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## cancelApiOrder

Cancelar pedido

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancelApiOrder" method="post" path="/api/v1/orders/{order_id}/cancel" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.cancelApiOrder({
    orderId: "e9ac519f-65ca-41eb-b42f-f833c9605165",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiCancelAPIOrder } from "lapyme/funcs/api-cancel-api-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCancelAPIOrder(lapyme, {
    orderId: "e9ac519f-65ca-41eb-b42f-f833c9605165",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCancelAPIOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelApiOrderRequest](../../models/operations/cancel-api-order-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CancelApiOrderResponse](../../models/operations/cancel-api-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## prepareApiOrder

Prepara líneas del pedido y requiere Idempotency-Key.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="prepareApiOrder" method="post" path="/api/v1/orders/{order_id}/prepare" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.prepareApiOrder({
    orderId: "4cf6dbdc-3139-4f1e-b983-7eeee6973c21",
    idempotencyKey: "<value>",
    body: {
      items: [
        {
          orderLineId: "26dc130a-ffa0-4183-8448-39338d0b4d3f",
          quantity: 629417,
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
import { apiPrepareAPIOrder } from "lapyme/funcs/api-prepare-api-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiPrepareAPIOrder(lapyme, {
    orderId: "4cf6dbdc-3139-4f1e-b983-7eeee6973c21",
    idempotencyKey: "<value>",
    body: {
      items: [
        {
          orderLineId: "26dc130a-ffa0-4183-8448-39338d0b4d3f",
          quantity: 629417,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiPrepareAPIOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PrepareApiOrderRequest](../../models/operations/prepare-api-order-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PrepareApiOrderResponse](../../models/operations/prepare-api-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## packageApiOrder

Empaquetar pedido

### Example Usage

<!-- UsageSnippet language="typescript" operationID="packageApiOrder" method="post" path="/api/v1/orders/{order_id}/package" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.packageApiOrder({
    orderId: "2b0d3f96-6df9-4ab6-a57a-b33f95552dbe",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiPackageAPIOrder } from "lapyme/funcs/api-package-api-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiPackageAPIOrder(lapyme, {
    orderId: "2b0d3f96-6df9-4ab6-a57a-b33f95552dbe",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiPackageAPIOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PackageApiOrderRequest](../../models/operations/package-api-order-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PackageApiOrderResponse](../../models/operations/package-api-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## unprepareApiOrder

Revertir preparación del pedido

### Example Usage

<!-- UsageSnippet language="typescript" operationID="unprepareApiOrder" method="post" path="/api/v1/orders/{order_id}/unprepare" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.unprepareApiOrder({
    orderId: "47b4982d-75f8-4739-87b6-4ecb820a257d",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiUnprepareAPIOrder } from "lapyme/funcs/api-unprepare-api-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiUnprepareAPIOrder(lapyme, {
    orderId: "47b4982d-75f8-4739-87b6-4ecb820a257d",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiUnprepareAPIOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnprepareApiOrderRequest](../../models/operations/unprepare-api-order-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UnprepareApiOrderResponse](../../models/operations/unprepare-api-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## changeApiOrderFulfillmentLocation

Cambiar ubicación de preparación

### Example Usage

<!-- UsageSnippet language="typescript" operationID="changeApiOrderFulfillmentLocation" method="post" path="/api/v1/orders/{order_id}/change-fulfillment-location" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.changeApiOrderFulfillmentLocation({
    orderId: "92c5bb7f-533e-4658-b28b-eaa5a9b1a2b6",
    body: {
      warehouseId: "6bf3d383-0f30-4723-95e7-fca13c16dca2",
      items: [],
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
import { apiChangeAPIOrderFulfillmentLocation } from "lapyme/funcs/api-change-api-order-fulfillment-location.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiChangeAPIOrderFulfillmentLocation(lapyme, {
    orderId: "92c5bb7f-533e-4658-b28b-eaa5a9b1a2b6",
    body: {
      warehouseId: "6bf3d383-0f30-4723-95e7-fca13c16dca2",
      items: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiChangeAPIOrderFulfillmentLocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ChangeApiOrderFulfillmentLocationRequest](../../models/operations/change-api-order-fulfillment-location-request.md)                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ChangeApiOrderFulfillmentLocationResponse](../../models/operations/change-api-order-fulfillment-location-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## unarchiveApiOrder

Desarchivar pedido

### Example Usage

<!-- UsageSnippet language="typescript" operationID="unarchiveApiOrder" method="post" path="/api/v1/orders/{order_id}/unarchive" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.unarchiveApiOrder({
    orderId: "3b84b923-35b9-4563-a522-e123668d7e5f",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiUnarchiveAPIOrder } from "lapyme/funcs/api-unarchive-api-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiUnarchiveAPIOrder(lapyme, {
    orderId: "3b84b923-35b9-4563-a522-e123668d7e5f",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiUnarchiveAPIOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnarchiveApiOrderRequest](../../models/operations/unarchive-api-order-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UnarchiveApiOrderResponse](../../models/operations/unarchive-api-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## listApiOrderFulfillmentOrders

Listar órdenes de preparación del pedido

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiOrderFulfillmentOrders" method="get" path="/api/v1/orders/{order_id}/fulfillment-orders" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.listApiOrderFulfillmentOrders({
    orderId: "5f05654d-e12d-4181-98c6-be7ca4749beb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiListAPIOrderFulfillmentOrders } from "lapyme/funcs/api-list-api-order-fulfillment-orders.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiListAPIOrderFulfillmentOrders(lapyme, {
    orderId: "5f05654d-e12d-4181-98c6-be7ca4749beb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiListAPIOrderFulfillmentOrders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiOrderFulfillmentOrdersRequest](../../models/operations/list-api-order-fulfillment-orders-request.md)                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiOrderFulfillmentOrdersResponse](../../models/operations/list-api-order-fulfillment-orders-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## startApiFulfillmentOrder

Iniciar orden de preparación

### Example Usage

<!-- UsageSnippet language="typescript" operationID="startApiFulfillmentOrder" method="post" path="/api/v1/fulfillment-orders/{fulfillment_order_id}/start" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.startApiFulfillmentOrder({
    fulfillmentOrderId: "b218ef54-a64b-4972-88b2-24e5c33d91be",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiStartAPIFulfillmentOrder } from "lapyme/funcs/api-start-api-fulfillment-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiStartAPIFulfillmentOrder(lapyme, {
    fulfillmentOrderId: "b218ef54-a64b-4972-88b2-24e5c33d91be",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiStartAPIFulfillmentOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StartApiFulfillmentOrderRequest](../../models/operations/start-api-fulfillment-order-request.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StartApiFulfillmentOrderResponse](../../models/operations/start-api-fulfillment-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## cancelApiFulfillmentOrder

Cancelar orden de preparación

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancelApiFulfillmentOrder" method="post" path="/api/v1/fulfillment-orders/{fulfillment_order_id}/cancel" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.cancelApiFulfillmentOrder({
    fulfillmentOrderId: "9b14556b-4b54-4548-a0b8-97266953c038",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiCancelAPIFulfillmentOrder } from "lapyme/funcs/api-cancel-api-fulfillment-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCancelAPIFulfillmentOrder(lapyme, {
    fulfillmentOrderId: "9b14556b-4b54-4548-a0b8-97266953c038",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCancelAPIFulfillmentOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelApiFulfillmentOrderRequest](../../models/operations/cancel-api-fulfillment-order-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CancelApiFulfillmentOrderResponse](../../models/operations/cancel-api-fulfillment-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## createApiFulfillment

Crear fulfillment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createApiFulfillment" method="post" path="/api/v1/fulfillments" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiFulfillment({
    idempotencyKey: "<value>",
    body: {
      fulfillmentOrderId: "1fc6f4ea-1362-43bc-96ca-3c9e56ec320f",
      lines: [
        {
          fulfillmentOrderLineId: "9a751576-2557-4be9-ae5c-9bb376858981",
          quantity: 197191,
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
import { apiCreateAPIFulfillment } from "lapyme/funcs/api-create-api-fulfillment.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPIFulfillment(lapyme, {
    idempotencyKey: "<value>",
    body: {
      fulfillmentOrderId: "1fc6f4ea-1362-43bc-96ca-3c9e56ec320f",
      lines: [
        {
          fulfillmentOrderLineId: "9a751576-2557-4be9-ae5c-9bb376858981",
          quantity: 197191,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPIFulfillment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiFulfillmentRequest](../../models/operations/create-api-fulfillment-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiFulfillmentResponse](../../models/operations/create-api-fulfillment-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## voidApiFulfillment

Anular fulfillment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="voidApiFulfillment" method="post" path="/api/v1/fulfillments/{fulfillment_id}/void" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.voidApiFulfillment({
    fulfillmentId: "8bb50a3d-1712-420b-a8b8-a89196f0a47e",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiVoidAPIFulfillment } from "lapyme/funcs/api-void-api-fulfillment.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiVoidAPIFulfillment(lapyme, {
    fulfillmentId: "8bb50a3d-1712-420b-a8b8-a89196f0a47e",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiVoidAPIFulfillment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VoidApiFulfillmentRequest](../../models/operations/void-api-fulfillment-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.VoidApiFulfillmentResponse](../../models/operations/void-api-fulfillment-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## invoiceApiOrder

Factura líneas del pedido y requiere Idempotency-Key.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="invoiceApiOrder" method="post" path="/api/v1/orders/{order_id}/invoice" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.invoiceApiOrder({
    orderId: "62fba979-300a-4a3f-ba3d-8aa6af2a9a8a",
    idempotencyKey: "<value>",
    body: {
      voucherType: 48872,
      pointOfSaleId: "f8e90b25-7153-4691-a3cb-73ad3857e718",
      invoiceDate: new Date("2026-02-20"),
      lines: [],
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
import { apiInvoiceAPIOrder } from "lapyme/funcs/api-invoice-api-order.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiInvoiceAPIOrder(lapyme, {
    orderId: "62fba979-300a-4a3f-ba3d-8aa6af2a9a8a",
    idempotencyKey: "<value>",
    body: {
      voucherType: 48872,
      pointOfSaleId: "f8e90b25-7153-4691-a3cb-73ad3857e718",
      invoiceDate: new Date("2026-02-20"),
      lines: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiInvoiceAPIOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InvoiceApiOrderRequest](../../models/operations/invoice-api-order-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.InvoiceApiOrderResponse](../../models/operations/invoice-api-order-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getApiSaleById

Devuelve el detalle de la venta.

Required scopes: `sales:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiSaleById" method="get" path="/api/v1/sales/{sale_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.getApiSaleById({
    saleId: "febb91d1-cb64-4300-87ab-b7891a56c2d2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiGetAPISaleById } from "lapyme/funcs/api-get-api-sale-by-id.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiGetAPISaleById(lapyme, {
    saleId: "febb91d1-cb64-4300-87ab-b7891a56c2d2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiGetAPISaleById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiSaleByIdRequest](../../models/operations/get-api-sale-by-id-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiSaleByIdResponse](../../models/operations/get-api-sale-by-id-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 401, 403, 404             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getApiStockTransferById

Devuelve el detalle de la transferencia de stock.

Required scopes: `transfers:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiStockTransferById" method="get" path="/api/v1/stock-transfers/{transfer_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.getApiStockTransferById({
    transferId: "deab7f5f-ee0f-4f99-8615-c57656f882ca",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiGetAPIStockTransferById } from "lapyme/funcs/api-get-api-stock-transfer-by-id.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiGetAPIStockTransferById(lapyme, {
    transferId: "deab7f5f-ee0f-4f99-8615-c57656f882ca",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiGetAPIStockTransferById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiStockTransferByIdRequest](../../models/operations/get-api-stock-transfer-by-id-request.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiStockTransferByIdResponse](../../models/operations/get-api-stock-transfer-by-id-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 401, 403, 404             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## createApiStockMovement

Registra un movimiento manual para ajustar stock de un producto o variante.

Required scopes: `products:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createApiStockMovement" method="post" path="/api/v1/stock-movements" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiStockMovement({
    idempotencyKey: "<value>",
    body: {
      warehouseId: "bd7bbffc-54b1-41ee-9e14-243256fb1a18",
      mode: "replace",
      operationDate: new Date("2026-04-01T10:38:32.297Z"),
      reason: "<value>",
      items: [],
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
import { apiCreateAPIStockMovement } from "lapyme/funcs/api-create-api-stock-movement.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPIStockMovement(lapyme, {
    idempotencyKey: "<value>",
    body: {
      warehouseId: "bd7bbffc-54b1-41ee-9e14-243256fb1a18",
      mode: "replace",
      operationDate: new Date("2026-04-01T10:38:32.297Z"),
      reason: "<value>",
      items: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPIStockMovement failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiStockMovementRequest](../../models/operations/create-api-stock-movement-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiStockMovementResponse](../../models/operations/create-api-stock-movement-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getApiCustomerById

Devuelve los datos del cliente.

Required scopes: `customers:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiCustomerById" method="get" path="/api/v1/customers/{customer_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.getApiCustomerById({
    customerId: "c8c50010-7fcf-437d-9d79-bbb258488677",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiGetAPICustomerById } from "lapyme/funcs/api-get-api-customer-by-id.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiGetAPICustomerById(lapyme, {
    customerId: "c8c50010-7fcf-437d-9d79-bbb258488677",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiGetAPICustomerById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiCustomerByIdRequest](../../models/operations/get-api-customer-by-id-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiCustomerByIdResponse](../../models/operations/get-api-customer-by-id-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## updateApiCustomer

Actualiza un cliente y devuelve los datos persistidos.

Required scopes: `customers:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateApiCustomer" method="put" path="/api/v1/customers/{customer_id}" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.updateApiCustomer({
    customerId: "0872bca0-691c-4e86-94ea-914c7d0fcb2b",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiUpdateAPICustomer } from "lapyme/funcs/api-update-api-customer.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiUpdateAPICustomer(lapyme, {
    customerId: "0872bca0-691c-4e86-94ea-914c7d0fcb2b",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiUpdateAPICustomer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateApiCustomerRequest](../../models/operations/update-api-customer-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateApiCustomerResponse](../../models/operations/update-api-customer-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## listApiTags

Lista el catálogo de etiquetas para un scope específico. Puede incluir etiquetas archivadas.

Required scopes: `scope-dependent read scope`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiTags" method="get" path="/api/v1/tags" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.listApiTags({
    scope: "product",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiListAPITags } from "lapyme/funcs/api-list-api-tags.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiListAPITags(lapyme, {
    scope: "product",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiListAPITags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiTagsRequest](../../models/operations/list-api-tags-request.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiTagsResponse](../../models/operations/list-api-tags-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## createApiTag

Crea una etiqueta para clasificar clientes, proveedores, productos o ventas.

Required scopes: `admin`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createApiTag" method="post" path="/api/v1/tags" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiTag({
    idempotencyKey: "<value>",
    body: {
      scope: "purchase",
      name: "<value>",
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
import { apiCreateAPITag } from "lapyme/funcs/api-create-api-tag.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPITag(lapyme, {
    idempotencyKey: "<value>",
    body: {
      scope: "purchase",
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPITag failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiTagRequest](../../models/operations/create-api-tag-request.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiTagResponse](../../models/operations/create-api-tag-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 409        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## updateApiTag

Renombra, actualiza metadatos o archiva/desarchiva una etiqueta existente.

Required scopes: `admin`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateApiTag" method="patch" path="/api/v1/tags/{tag_id}" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.updateApiTag({
    tagId: "d27ab3f2-d6df-4e6f-a838-daf199d4c1d8",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiUpdateAPITag } from "lapyme/funcs/api-update-api-tag.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiUpdateAPITag(lapyme, {
    tagId: "d27ab3f2-d6df-4e6f-a838-daf199d4c1d8",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiUpdateAPITag failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateApiTagRequest](../../models/operations/update-api-tag-request.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateApiTagResponse](../../models/operations/update-api-tag-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## applyApiPurchaseTags

Agrega y/o remueve etiquetas de scope `purchase` en un lote de compras.

Required scopes: `purchases:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="applyApiPurchaseTags" method="post" path="/api/v1/purchases/tags/apply" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.applyApiPurchaseTags({
    body: {
      entityIds: [
        "0469524a-e66f-4008-917d-634d39d7c2e4",
      ],
      addTagIds: [
        "5ad87872-f143-4111-ab29-c1f22b980bc5",
        "9932b290-bf4a-4163-8ab6-83eb57fcff3b",
        "ddaaf310-6ba3-46a1-a83d-592de6b0589d",
      ],
      removeTagIds: [],
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
import { apiApplyAPIPurchaseTags } from "lapyme/funcs/api-apply-api-purchase-tags.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiApplyAPIPurchaseTags(lapyme, {
    body: {
      entityIds: [
        "0469524a-e66f-4008-917d-634d39d7c2e4",
      ],
      addTagIds: [
        "5ad87872-f143-4111-ab29-c1f22b980bc5",
        "9932b290-bf4a-4163-8ab6-83eb57fcff3b",
        "ddaaf310-6ba3-46a1-a83d-592de6b0589d",
      ],
      removeTagIds: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiApplyAPIPurchaseTags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApplyApiPurchaseTagsRequest](../../models/operations/apply-api-purchase-tags-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ApplyApiPurchaseTagsResponse](../../models/operations/apply-api-purchase-tags-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## applyApiCustomerTags

Agrega y/o remueve etiquetas de scope `customer` en un lote de clientes.

Required scopes: `customers:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="applyApiCustomerTags" method="post" path="/api/v1/customers/tags/apply" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.applyApiCustomerTags({
    body: {
      entityIds: [],
      addTagIds: [],
      removeTagIds: [
        "bc4029ce-8be0-475c-928b-9f5f237767f3",
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
import { apiApplyAPICustomerTags } from "lapyme/funcs/api-apply-api-customer-tags.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiApplyAPICustomerTags(lapyme, {
    body: {
      entityIds: [],
      addTagIds: [],
      removeTagIds: [
        "bc4029ce-8be0-475c-928b-9f5f237767f3",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiApplyAPICustomerTags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApplyApiCustomerTagsRequest](../../models/operations/apply-api-customer-tags-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ApplyApiCustomerTagsResponse](../../models/operations/apply-api-customer-tags-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## applyApiSupplierTags

Agrega y/o remueve etiquetas de scope `supplier` en un lote de proveedores.

Required scopes: `suppliers:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="applyApiSupplierTags" method="post" path="/api/v1/suppliers/tags/apply" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.applyApiSupplierTags({
    body: {
      entityIds: [],
      addTagIds: [],
      removeTagIds: [],
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
import { apiApplyAPISupplierTags } from "lapyme/funcs/api-apply-api-supplier-tags.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiApplyAPISupplierTags(lapyme, {
    body: {
      entityIds: [],
      addTagIds: [],
      removeTagIds: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiApplyAPISupplierTags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApplyApiSupplierTagsRequest](../../models/operations/apply-api-supplier-tags-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ApplyApiSupplierTagsResponse](../../models/operations/apply-api-supplier-tags-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## applyApiProductTags

Agrega y/o remueve etiquetas de scope `product` en un lote de productos.

Required scopes: `products:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="applyApiProductTags" method="post" path="/api/v1/products/tags/apply" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.applyApiProductTags({
    body: {
      entityIds: [
        "62cea257-6439-4d9e-be86-2acfea6fb4bf",
      ],
      addTagIds: [],
      removeTagIds: [],
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
import { apiApplyAPIProductTags } from "lapyme/funcs/api-apply-api-product-tags.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiApplyAPIProductTags(lapyme, {
    body: {
      entityIds: [
        "62cea257-6439-4d9e-be86-2acfea6fb4bf",
      ],
      addTagIds: [],
      removeTagIds: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiApplyAPIProductTags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApplyApiProductTagsRequest](../../models/operations/apply-api-product-tags-request.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ApplyApiProductTagsResponse](../../models/operations/apply-api-product-tags-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## applyApiSaleTags

Agrega y/o remueve etiquetas de scope `sale` en un lote de ventas.

Required scopes: `sales:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="applyApiSaleTags" method="post" path="/api/v1/sales/tags/apply" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.applyApiSaleTags({
    body: {
      entityIds: [
        "1ad49fba-1b81-41f0-a591-3523589f53fc",
      ],
      addTagIds: [
        "69840faa-66cf-4a83-b132-1830aa6eaaee",
      ],
      removeTagIds: [
        "88ff7f46-14de-469c-b72c-df4b20169ed1",
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
import { apiApplyAPISaleTags } from "lapyme/funcs/api-apply-api-sale-tags.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiApplyAPISaleTags(lapyme, {
    body: {
      entityIds: [
        "1ad49fba-1b81-41f0-a591-3523589f53fc",
      ],
      addTagIds: [
        "69840faa-66cf-4a83-b132-1830aa6eaaee",
      ],
      removeTagIds: [
        "88ff7f46-14de-469c-b72c-df4b20169ed1",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiApplyAPISaleTags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApplyApiSaleTagsRequest](../../models/operations/apply-api-sale-tags-request.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ApplyApiSaleTagsResponse](../../models/operations/apply-api-sale-tags-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## listApiCustomerPayments

Lista cobranzas de clientes con búsqueda, filtro por fecha, estado y paginación por cursor.

Required scopes: `sales:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiCustomerPayments" method="get" path="/api/v1/customer-payments" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.listApiCustomerPayments({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiListAPICustomerPayments } from "lapyme/funcs/api-list-api-customer-payments.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiListAPICustomerPayments(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiListAPICustomerPayments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiCustomerPaymentsRequest](../../models/operations/list-api-customer-payments-request.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiCustomerPaymentsResponse](../../models/operations/list-api-customer-payments-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## createApiCustomerPayment

Registra una cobranza de cliente con uno o más métodos de pago, aplicaciones a ventas o cuenta corriente, retenciones y datos de cheque cuando corresponde.

Required scopes: `sales:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createApiCustomerPayment" method="post" path="/api/v1/customer-payments" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiCustomerPayment({
    idempotencyKey: "<value>",
    body: {
      customerId: "6c3bc874-5a0f-4681-9333-2cb3b1ae904e",
      pointOfSaleId: "4951289f-66e9-4bef-a8ed-fa5e1852a608",
      paymentDate: "<value>",
      currency: "PES",
      totalAmount: 164221,
      splits: [],
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
import { apiCreateAPICustomerPayment } from "lapyme/funcs/api-create-api-customer-payment.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPICustomerPayment(lapyme, {
    idempotencyKey: "<value>",
    body: {
      customerId: "6c3bc874-5a0f-4681-9333-2cb3b1ae904e",
      pointOfSaleId: "4951289f-66e9-4bef-a8ed-fa5e1852a608",
      paymentDate: "<value>",
      currency: "PES",
      totalAmount: 164221,
      splits: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPICustomerPayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiCustomerPaymentRequest](../../models/operations/create-api-customer-payment-request.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiCustomerPaymentResponse](../../models/operations/create-api-customer-payment-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 409        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getApiCustomerPayment

Obtiene una cobranza de cliente por ID.

Required scopes: `sales:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiCustomerPayment" method="get" path="/api/v1/customer-payments/{payment_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.getApiCustomerPayment({
    paymentId: "0feeb625-0d1b-4e20-9123-3c110b44163b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiGetAPICustomerPayment } from "lapyme/funcs/api-get-api-customer-payment.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiGetAPICustomerPayment(lapyme, {
    paymentId: "0feeb625-0d1b-4e20-9123-3c110b44163b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiGetAPICustomerPayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiCustomerPaymentRequest](../../models/operations/get-api-customer-payment-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiCustomerPaymentResponse](../../models/operations/get-api-customer-payment-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## voidApiCustomerPayment

Anula una cobranza de cliente existente por ID.

Required scopes: `sales:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="voidApiCustomerPayment" method="post" path="/api/v1/customer-payments/{payment_id}/void" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.voidApiCustomerPayment({
    paymentId: "f88e9906-f672-4be8-8060-3195304503f9",
    idempotencyKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiVoidAPICustomerPayment } from "lapyme/funcs/api-void-api-customer-payment.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiVoidAPICustomerPayment(lapyme, {
    paymentId: "f88e9906-f672-4be8-8060-3195304503f9",
    idempotencyKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiVoidAPICustomerPayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VoidApiCustomerPaymentRequest](../../models/operations/void-api-customer-payment-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.VoidApiCustomerPaymentResponse](../../models/operations/void-api-customer-payment-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## listApiSupplierPayments

Lista pagos a proveedores con búsqueda, filtro por fecha, estado y paginación por cursor.

Required scopes: `purchases:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiSupplierPayments" method="get" path="/api/v1/supplier-payments" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.listApiSupplierPayments({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiListAPISupplierPayments } from "lapyme/funcs/api-list-api-supplier-payments.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiListAPISupplierPayments(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiListAPISupplierPayments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiSupplierPaymentsRequest](../../models/operations/list-api-supplier-payments-request.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiSupplierPaymentsResponse](../../models/operations/list-api-supplier-payments-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## createApiSupplierPayment

Registra un pago a proveedor con uno o más métodos de pago, aplicaciones a compras o cuenta corriente, retenciones y datos de cheque cuando corresponde.

Required scopes: `purchases:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createApiSupplierPayment" method="post" path="/api/v1/supplier-payments" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.createApiSupplierPayment({
    idempotencyKey: "<value>",
    body: {
      supplierId: "327cbfaa-bdc6-454c-ab70-1739c72d6e49",
      pointOfSaleId: "ba7f4895-13b5-46e8-9466-323405ce54a8",
      paymentDate: "<value>",
      currency: "PES",
      totalAmount: 491818,
      splits: [
        {
          paymentMethodId: "81bf4bfa-1739-4ab1-8e65-33b40b0a3b68",
          amount: 657636,
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
import { apiCreateAPISupplierPayment } from "lapyme/funcs/api-create-api-supplier-payment.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiCreateAPISupplierPayment(lapyme, {
    idempotencyKey: "<value>",
    body: {
      supplierId: "327cbfaa-bdc6-454c-ab70-1739c72d6e49",
      pointOfSaleId: "ba7f4895-13b5-46e8-9466-323405ce54a8",
      paymentDate: "<value>",
      currency: "PES",
      totalAmount: 491818,
      splits: [
        {
          paymentMethodId: "81bf4bfa-1739-4ab1-8e65-33b40b0a3b68",
          amount: 657636,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCreateAPISupplierPayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiSupplierPaymentRequest](../../models/operations/create-api-supplier-payment-request.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiSupplierPaymentResponse](../../models/operations/create-api-supplier-payment-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 409        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getApiSupplierPayment

Obtiene un pago a proveedor por ID.

Required scopes: `purchases:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiSupplierPayment" method="get" path="/api/v1/supplier-payments/{payment_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.getApiSupplierPayment({
    paymentId: "f68b0f3f-899a-4211-b017-9817f780cd4b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiGetAPISupplierPayment } from "lapyme/funcs/api-get-api-supplier-payment.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiGetAPISupplierPayment(lapyme, {
    paymentId: "f68b0f3f-899a-4211-b017-9817f780cd4b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiGetAPISupplierPayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiSupplierPaymentRequest](../../models/operations/get-api-supplier-payment-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiSupplierPaymentResponse](../../models/operations/get-api-supplier-payment-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## voidApiSupplierPayment

Anula un pago a proveedor existente por ID.

Required scopes: `purchases:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="voidApiSupplierPayment" method="post" path="/api/v1/supplier-payments/{payment_id}/void" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.voidApiSupplierPayment({
    paymentId: "75f81e9d-6d3b-41c9-8301-2ff75a5ec131",
    idempotencyKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiVoidAPISupplierPayment } from "lapyme/funcs/api-void-api-supplier-payment.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiVoidAPISupplierPayment(lapyme, {
    paymentId: "75f81e9d-6d3b-41c9-8301-2ff75a5ec131",
    idempotencyKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiVoidAPISupplierPayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VoidApiSupplierPaymentRequest](../../models/operations/void-api-supplier-payment-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.VoidApiSupplierPaymentResponse](../../models/operations/void-api-supplier-payment-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getApiPaymentMethod

Obtiene un método de pago por ID.

Required scopes: `payment_methods:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiPaymentMethod" method="get" path="/api/v1/payment-methods/{payment_method_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.getApiPaymentMethod({
    paymentMethodId: "09474357-bf1e-4331-aa20-048cf3997bd2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiGetAPIPaymentMethod } from "lapyme/funcs/api-get-api-payment-method.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiGetAPIPaymentMethod(lapyme, {
    paymentMethodId: "09474357-bf1e-4331-aa20-048cf3997bd2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiGetAPIPaymentMethod failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiPaymentMethodRequest](../../models/operations/get-api-payment-method-request.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiPaymentMethodResponse](../../models/operations/get-api-payment-method-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## updateApiPaymentMethod

Actualiza el nombre, estado o configuración contable de un método de pago.

Required scopes: `payment_methods:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateApiPaymentMethod" method="put" path="/api/v1/payment-methods/{payment_method_id}" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.updateApiPaymentMethod({
    paymentMethodId: "4e96dfa5-50b3-433f-944d-721acc42cb57",
    idempotencyKey: "<value>",
    body: {
      name: "<value>",
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
import { apiUpdateAPIPaymentMethod } from "lapyme/funcs/api-update-api-payment-method.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiUpdateAPIPaymentMethod(lapyme, {
    paymentMethodId: "4e96dfa5-50b3-433f-944d-721acc42cb57",
    idempotencyKey: "<value>",
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiUpdateAPIPaymentMethod failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateApiPaymentMethodRequest](../../models/operations/update-api-payment-method-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateApiPaymentMethodResponse](../../models/operations/update-api-payment-method-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## listApiPointsOfSale

Lista los puntos de venta accesibles para la API key autenticada.

Required scopes: `sales:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiPointsOfSale" method="get" path="/api/v1/points-of-sale" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.listApiPointsOfSale({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiListAPIPointsOfSale } from "lapyme/funcs/api-list-api-points-of-sale.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiListAPIPointsOfSale(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiListAPIPointsOfSale failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiPointsOfSaleRequest](../../models/operations/list-api-points-of-sale-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiPointsOfSaleResponse](../../models/operations/list-api-points-of-sale-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## listApiInventory

Devuelve el inventario de un depósito específico con filtros por categoría, tipo y cantidades.

Required scopes: `products:read`, `warehouses:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiInventory" method="get" path="/api/v1/inventory" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.listApiInventory({
    warehouseId: "51c4ca54-9c30-4c30-b9d1-5d70fa9f83ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiListAPIInventory } from "lapyme/funcs/api-list-api-inventory.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiListAPIInventory(lapyme, {
    warehouseId: "51c4ca54-9c30-4c30-b9d1-5d70fa9f83ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiListAPIInventory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiInventoryRequest](../../models/operations/list-api-inventory-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiInventoryResponse](../../models/operations/list-api-inventory-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## listApiInventoryMovements

Lista el historial de movimientos de inventario del producto, opcionalmente filtrado por depósito.

Required scopes: `products:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiInventoryMovements" method="get" path="/api/v1/inventory/movements" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.api.listApiInventoryMovements({
    productId: "c0dc6b95-c526-4cab-8769-9ace6ad071f5",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { apiListAPIInventoryMovements } from "lapyme/funcs/api-list-api-inventory-movements.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiListAPIInventoryMovements(lapyme, {
    productId: "c0dc6b95-c526-4cab-8769-9ace6ad071f5",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiListAPIInventoryMovements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiInventoryMovementsRequest](../../models/operations/list-api-inventory-movements-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiInventoryMovementsResponse](../../models/operations/list-api-inventory-movements-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |