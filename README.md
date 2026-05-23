# lapyme

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *lapyme* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=lapyme&utm_campaign=typescript)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/lapyme/la-pyme). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

La Pyme API: API externa para integrar con el sistema de gestión La Pyme. v1 cubre clientes, productos, ventas, stock y transferencias. v2 agrega compras, proveedores y reportes con errores estructurados e idempotencia.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [lapyme](#lapyme)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add https://github.com/LaPyme/lapyme-ts
```

### PNPM

```bash
pnpm add https://github.com/LaPyme/lapyme-ts
```

### Bun

```bash
bun add https://github.com/LaPyme/lapyme-ts
```

### Yarn

```bash
yarn add https://github.com/LaPyme/lapyme-ts
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import()` to import and use this package.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme();

async function run() {
  const result = await lapyme.health.check();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable |
| ------------ | ---- | ----------- | -------------------- |
| `bearerAuth` | http | HTTP Bearer | `LAPYME_BEARER_AUTH` |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.health.check();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Categories](docs/sdks/categories/README.md)

* [get](docs/sdks/categories/README.md#get) - Obtener lista de categorías
* [create](docs/sdks/categories/README.md#create) - Crear nueva categoría
* [getById](docs/sdks/categories/README.md#getbyid) - Obtener categoría por ID
* [updateById](docs/sdks/categories/README.md#updatebyid) - Actualizar categoría

### [Customers](docs/sdks/customers/README.md)

* [get](docs/sdks/customers/README.md#get) - Obtener lista de clientes
* [create](docs/sdks/customers/README.md#create) - Crear nuevo cliente
* [getById](docs/sdks/customers/README.md#getbyid) - Obtener cliente por ID
* [update](docs/sdks/customers/README.md#update) - Actualizar cliente

### [Health](docs/sdks/health/README.md)

* [check](docs/sdks/health/README.md#check) - Estado del servicio

### [PaymentMethods](docs/sdks/paymentmethods/README.md)

* [list](docs/sdks/paymentmethods/README.md#list) - Obtener lista de métodos de pago
* [create](docs/sdks/paymentmethods/README.md#create) - Crear nuevo método de pago
* [getById](docs/sdks/paymentmethods/README.md#getbyid) - Obtener método de pago por ID
* [update](docs/sdks/paymentmethods/README.md#update) - Actualizar método de pago

### [PriceLists](docs/sdks/pricelists/README.md)

* [get](docs/sdks/pricelists/README.md#get) - Obtener lista de listas de precios
* [getById](docs/sdks/pricelists/README.md#getbyid) - Obtener lista de precios por ID

### [Products](docs/sdks/products/README.md)

* [list](docs/sdks/products/README.md#list) - Obtener lista de productos
* [create](docs/sdks/products/README.md#create) - Crear nuevo producto
* [getById](docs/sdks/products/README.md#getbyid) - Obtener producto por ID
* [update](docs/sdks/products/README.md#update) - Actualizar producto

### [Purchases](docs/sdks/purchases/README.md)

* [create](docs/sdks/purchases/README.md#create) - Crear compra (v2)

### [Reports](docs/sdks/reports/README.md)

* [query](docs/sdks/reports/README.md#query) - Consultar reporte (v2)

### [Sales](docs/sdks/sales/README.md)

* [list](docs/sdks/sales/README.md#list) - Obtener lista de ventas
* [create](docs/sdks/sales/README.md#create) - Crear nueva venta
* [getById](docs/sdks/sales/README.md#getbyid) - Obtener venta por ID

### [StockPerWarehouse](docs/sdks/stockperwarehouse/README.md)

* [list](docs/sdks/stockperwarehouse/README.md#list) - Obtener stock por ubicación

### [Suppliers](docs/sdks/suppliers/README.md)

* [list](docs/sdks/suppliers/README.md#list) - Listar proveedores (v2)

### [Transfers](docs/sdks/transfers/README.md)

* [create](docs/sdks/transfers/README.md#create) - Crear nueva transferencia

### [V2](docs/sdks/v2/README.md)

* [retrieveProducts](docs/sdks/v2/README.md#retrieveproducts) - Listar productos (v2)
* [retrieveWarehouses](docs/sdks/v2/README.md#retrievewarehouses) - Listar ubicaciones (v2)
* [retrievePurchases](docs/sdks/v2/README.md#retrievepurchases) - Listar compras (v2)

#### [V2.Purchases](docs/sdks/v2purchases/README.md)

* [getById](docs/sdks/v2purchases/README.md#getbyid) - Obtener compra por ID (v2)

### [Warehouses](docs/sdks/warehouses/README.md)

* [list](docs/sdks/warehouses/README.md#list) - Obtener lista de depósitos
* [create](docs/sdks/warehouses/README.md#create) - Crear nueva ubicación
* [getById](docs/sdks/warehouses/README.md#getbyid) - Obtener ubicación por ID
* [updateById](docs/sdks/warehouses/README.md#updatebyid) - Actualizar ubicación

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`categoriesCreate`](docs/sdks/categories/README.md#create) - Crear nueva categoría
- [`categoriesGet`](docs/sdks/categories/README.md#get) - Obtener lista de categorías
- [`categoriesGetById`](docs/sdks/categories/README.md#getbyid) - Obtener categoría por ID
- [`categoriesUpdateById`](docs/sdks/categories/README.md#updatebyid) - Actualizar categoría
- [`customersCreate`](docs/sdks/customers/README.md#create) - Crear nuevo cliente
- [`customersGet`](docs/sdks/customers/README.md#get) - Obtener lista de clientes
- [`customersGetById`](docs/sdks/customers/README.md#getbyid) - Obtener cliente por ID
- [`customersUpdate`](docs/sdks/customers/README.md#update) - Actualizar cliente
- [`healthCheck`](docs/sdks/health/README.md#check) - Estado del servicio
- [`paymentMethodsCreate`](docs/sdks/paymentmethods/README.md#create) - Crear nuevo método de pago
- [`paymentMethodsGetById`](docs/sdks/paymentmethods/README.md#getbyid) - Obtener método de pago por ID
- [`paymentMethodsList`](docs/sdks/paymentmethods/README.md#list) - Obtener lista de métodos de pago
- [`paymentMethodsUpdate`](docs/sdks/paymentmethods/README.md#update) - Actualizar método de pago
- [`priceListsGet`](docs/sdks/pricelists/README.md#get) - Obtener lista de listas de precios
- [`priceListsGetById`](docs/sdks/pricelists/README.md#getbyid) - Obtener lista de precios por ID
- [`productsCreate`](docs/sdks/products/README.md#create) - Crear nuevo producto
- [`productsGetById`](docs/sdks/products/README.md#getbyid) - Obtener producto por ID
- [`productsList`](docs/sdks/products/README.md#list) - Obtener lista de productos
- [`productsUpdate`](docs/sdks/products/README.md#update) - Actualizar producto
- [`purchasesCreate`](docs/sdks/purchases/README.md#create) - Crear compra (v2)
- [`reportsQuery`](docs/sdks/reports/README.md#query) - Consultar reporte (v2)
- [`salesCreate`](docs/sdks/sales/README.md#create) - Crear nueva venta
- [`salesGetById`](docs/sdks/sales/README.md#getbyid) - Obtener venta por ID
- [`salesList`](docs/sdks/sales/README.md#list) - Obtener lista de ventas
- [`stockPerWarehouseList`](docs/sdks/stockperwarehouse/README.md#list) - Obtener stock por ubicación
- [`suppliersList`](docs/sdks/suppliers/README.md#list) - Listar proveedores (v2)
- [`transfersCreate`](docs/sdks/transfers/README.md#create) - Crear nueva transferencia
- [`v2PurchasesGetById`](docs/sdks/v2purchases/README.md#getbyid) - Obtener compra por ID (v2)
- [`v2RetrieveProducts`](docs/sdks/v2/README.md#retrieveproducts) - Listar productos (v2)
- [`v2RetrievePurchases`](docs/sdks/v2/README.md#retrievepurchases) - Listar compras (v2)
- [`v2RetrieveWarehouses`](docs/sdks/v2/README.md#retrievewarehouses) - Listar ubicaciones (v2)
- [`warehousesCreate`](docs/sdks/warehouses/README.md#create) - Crear nueva ubicación
- [`warehousesGetById`](docs/sdks/warehouses/README.md#getbyid) - Obtener ubicación por ID
- [`warehousesList`](docs/sdks/warehouses/README.md#list) - Obtener lista de depósitos
- [`warehousesUpdateById`](docs/sdks/warehouses/README.md#updatebyid) - Actualizar ubicación

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme();

async function run() {
  const result = await lapyme.health.check({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await lapyme.health.check();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`LapymeError`](./src/models/errors/lapyme-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Lapyme } from "lapyme";
import * as errors from "lapyme/models/errors";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  try {
    const result = await lapyme.transfers.create({
      sourceWarehouseId: "ea9f2225-403b-4e2c-93b0-0eda090ffa65",
      targetWarehouseId: "d6903402-776f-48d6-8fba-0358959d34e5",
      transferDate: new Date("2026-07-31T09:19:08.808Z"),
      items: [],
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.LapymeError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.CreateTransferBadRequestError) {
        console.log(error.data$.success); // boolean
        console.log(error.data$.error); // string
        console.log(error.data$.code); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`LapymeError`](./src/models/errors/lapyme-error.ts): The base class for HTTP error responses.

<details><summary>Less common errors (21)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`LapymeError`](./src/models/errors/lapyme-error.ts)**:
* [`RateLimitedError2`](./src/models/errors/rate-limited-error2.ts): Límite de solicitudes excedido para la organización. Status code `429`. Applicable to 26 of 35 methods.*
* [`V2ErrorEnvelope2`](./src/models/errors/v2-error-envelope2.ts): Applicable to 6 of 35 methods.*
* [`GetCustomerByIdNotFoundError`](./src/models/errors/get-customer-by-id-not-found-error.ts): Cliente no encontrado. Status code `404`. Applicable to 2 of 35 methods.*
* [`GetProductByIdNotFoundError`](./src/models/errors/get-product-by-id-not-found-error.ts): Producto no encontrado. Status code `404`. Applicable to 2 of 35 methods.*
* [`GetCategoryByIdNotFoundError`](./src/models/errors/get-category-by-id-not-found-error.ts): Categoría no encontrada. Status code `404`. Applicable to 2 of 35 methods.*
* [`GetPaymentMethodByIdNotFoundError`](./src/models/errors/get-payment-method-by-id-not-found-error.ts): Método de pago no encontrado. Status code `404`. Applicable to 2 of 35 methods.*
* [`GetWarehouseByIdNotFoundError`](./src/models/errors/get-warehouse-by-id-not-found-error.ts): Ubicación no encontrada. Status code `404`. Applicable to 2 of 35 methods.*
* [`CreateTransferBadRequestError`](./src/models/errors/create-transfer-bad-request-error.ts): Error de validación o lógica de negocio. Status code `400`. Applicable to 1 of 35 methods.*
* [`CreateSaleBadRequestError`](./src/models/errors/create-sale-bad-request-error.ts): Error de validación o lógica de negocio. Status code `400`. Applicable to 1 of 35 methods.*
* [`V2ErrorEnvelope1`](./src/models/errors/v2-error-envelope1.ts): Parámetros inválidos. Applicable to 1 of 35 methods.*
* [`CreateTransferNotFoundError`](./src/models/errors/create-transfer-not-found-error.ts): Ubicación o producto no encontrado. Status code `404`. Applicable to 1 of 35 methods.*
* [`GetPriceListByIdNotFoundError`](./src/models/errors/get-price-list-by-id-not-found-error.ts): Lista de precios no encontrada. Status code `404`. Applicable to 1 of 35 methods.*
* [`CreateSaleNotFoundError`](./src/models/errors/create-sale-not-found-error.ts): Recurso no encontrado. Status code `404`. Applicable to 1 of 35 methods.*
* [`GetSaleByIdNotFoundError`](./src/models/errors/get-sale-by-id-not-found-error.ts): Venta no encontrada. Status code `404`. Applicable to 1 of 35 methods.*
* [`RateLimitedError1`](./src/models/errors/rate-limited-error1.ts): Límite de solicitudes excedido para la organización. Status code `429`. Applicable to 1 of 35 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  serverURL: "https://api.lapyme.com.ar",
});

async function run() {
  const result = await lapyme.health.check();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Lapyme } from "lapyme";
import { ProxyAgent } from "undici";
import { HTTPClient } from "lapyme/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Lapyme({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Lapyme } from "lapyme";

const sdk = new Lapyme({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `LAPYME_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=lapyme&utm_campaign=typescript)
