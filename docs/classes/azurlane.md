[Azur Lane](../README.md) > [AzurLane](../classes/azurlane.md)

# Class: AzurLane

## Hierarchy

**AzurLane**

## Index

### Constructors

* [constructor](azurlane.md#constructor)

### Properties

* [options](azurlane.md#options)

### Methods

* [buildInfo](azurlane.md#buildinfo)
* [ship](azurlane.md#ship)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AzurLane**(options?: *[IOptions](../interfaces/ioptions.md)*): [AzurLane](azurlane.md)

*Defined in [index.ts:16](https://github.com/KurozeroPB/AzurLane/blob/27a36d1/lib/index.ts#L16)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [IOptions](../interfaces/ioptions.md) |  Constructor options |

**Returns:** [AzurLane](azurlane.md)

___

## Properties

<a id="options"></a>

###  options

**● options**: *[IOptions](../interfaces/ioptions.md)*

*Defined in [index.ts:16](https://github.com/KurozeroPB/AzurLane/blob/27a36d1/lib/index.ts#L16)*

___

## Methods

<a id="buildinfo"></a>

###  buildInfo

▸ **buildInfo**(time: *`string`*): `Promise`<[IConstruction](../interfaces/iconstruction.md)>

*Defined in [index.ts:58](https://github.com/KurozeroPB/AzurLane/blob/27a36d1/lib/index.ts#L58)*

Get ship names matching the given construction time

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| time | `string` |  The construction time |

**Returns:** `Promise`<[IConstruction](../interfaces/iconstruction.md)>

___
<a id="ship"></a>

###  ship

▸ **ship**(name: *`string`*): `Promise`<[IShip](../interfaces/iship.md)>

*Defined in [index.ts:39](https://github.com/KurozeroPB/AzurLane/blob/27a36d1/lib/index.ts#L39)*

Get information about a ship by name

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the ship |

**Returns:** `Promise`<[IShip](../interfaces/iship.md)>

___

