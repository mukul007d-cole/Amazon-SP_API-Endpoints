{
  amazonWarehousingAndDistribution: {
    __versions: [ '2024-05-09' ],
    __operations: [
      'createInbound',
      'getInbound',
      'updateInbound',
      'cancelInbound',
      'confirmInbound',
      'getInboundShipment',
      'getInboundShipmentLabels',
      'updateInboundShipmentTransportDetails',
      'checkInboundEligibility',
      'listInboundShipments',
      'listInventory'
    ],
    '2024-05-09': {
      createInbound: [Function: createInbound],
      getInbound: [Function: getInbound],
      updateInbound: [Function: updateInbound],
      cancelInbound: [Function: cancelInbound],
      confirmInbound: [Function: confirmInbound],
      getInboundShipment: [Function: getInboundShipment],
      getInboundShipmentLabels: [Function: getInboundShipmentLabels],
      updateInboundShipmentTransportDetails: [Function: updateInboundShipmentTransportDetails],
      checkInboundEligibility: [Function: checkInboundEligibility],
      listInboundShipments: [Function: listInboundShipments],
      listInventory: [Function: listInventory]
    }
  },
  aplusContent: {
    __versions: [ '2020-11-01' ],
    __operations: [
      'searchContentDocuments',
      'createContentDocument',
      'getContentDocument',
      'updateContentDocument',
      'listContentDocumentAsinRelations',
      'postContentDocumentAsinRelations',
      'validateContentDocumentAsinRelations',
      'searchContentPublishRecords',
      'postContentDocumentApprovalSubmission',
      'postContentDocumentSuspendSubmission'
    ],
    '2020-11-01': {
      searchContentDocuments: [Function: searchContentDocuments],
      createContentDocument: [Function: createContentDocument],
      getContentDocument: [Function: getContentDocument],
      updateContentDocument: [Function: updateContentDocument],
      listContentDocumentAsinRelations: [Function: listContentDocumentAsinRelations],
      postContentDocumentAsinRelations: [Function: postContentDocumentAsinRelations],
      validateContentDocumentAsinRelations: [Function: validateContentDocumentAsinRelations],
      searchContentPublishRecords: [Function: searchContentPublishRecords],
      postContentDocumentApprovalSubmission: [Function: postContentDocumentApprovalSubmission],
      postContentDocumentSuspendSubmission: [Function: postContentDocumentSuspendSubmission]
    }
  },
  appIntegrations: {
    __versions: [ '2024-04-01' ],
    __operations: [
      'createNotification',
      'deleteNotifications',
      'recordActionFeedback'
    ],
    '2024-04-01': {
      createNotification: [Function: createNotification],
      deleteNotifications: [Function: deleteNotifications],
      recordActionFeedback: [Function: recordActionFeedback]
    }
  },
  applicationManagement: {
    __versions: [ '2023-11-30' ],
    __operations: [ 'rotateApplicationClientSecret' ],
    '2023-11-30': {
      rotateApplicationClientSecret: [Function: rotateApplicationClientSecret]
    }
  },
  catalogItems: {
    __versions: [ 'v0', '2020-12-01', '2022-04-01' ],
    __operations: [ 'getCatalogItem', 'listCatalogCategories', 'searchCatalogItems' ],
    v0: { listCatalogCategories: [Function: listCatalogCategories] },
    '2020-12-01': {
      searchCatalogItems: [Function: searchCatalogItems],
      getCatalogItem: [Function: getCatalogItem]
    },
    '2022-04-01': {
      searchCatalogItems: [Function: searchCatalogItems],
      getCatalogItem: [Function: getCatalogItem]
    }
  },
  customerFeedback: {
    __versions: [ '2024-06-01' ],
    __operations: [
      'getItemReviewTopics',
      'getItemBrowseNode',
      'getBrowseNodeReviewTopics',
      'getItemReviewTrends',
      'getBrowseNodeReviewTrends',
      'getBrowseNodeReturnTopics',
      'getBrowseNodeReturnTrends'
    ],
    '2024-06-01': {
      getItemReviewTopics: [Function: getItemReviewTopics],
      getItemBrowseNode: [Function: getItemBrowseNode],
      getBrowseNodeReviewTopics: [Function: getBrowseNodeReviewTopics],
      getItemReviewTrends: [Function: getItemReviewTrends],
      getBrowseNodeReviewTrends: [Function: getBrowseNodeReviewTrends],
      getBrowseNodeReturnTopics: [Function: getBrowseNodeReturnTopics],
      getBrowseNodeReturnTrends: [Function: getBrowseNodeReturnTrends]
    }
  },
  dataKiosk: {
    __versions: [ '2023-11-15' ],
    __operations: [
      'getQueries',
      'createQuery',
      'getQuery',
      'cancelQuery',
      'getDocument'
    ],
    '2023-11-15': {
      getQueries: [Function: getQueries],
      createQuery: [Function: createQuery],
      getQuery: [Function: getQuery],
      cancelQuery: [Function: cancelQuery],
      getDocument: [Function: getDocument]
    }
  },
  easyShip: {
    __versions: [ '2022-03-23' ],
    __operations: [
      'listHandoverSlots',
      'getScheduledPackage',
      'createScheduledPackage',
      'updateScheduledPackages',
      'createScheduledPackageBulk'
    ],
    '2022-03-23': {
      listHandoverSlots: [Function: listHandoverSlots],
      getScheduledPackage: [Function: getScheduledPackage],
      createScheduledPackage: [Function: createScheduledPackage],
      updateScheduledPackages: [Function: updateScheduledPackages],
      createScheduledPackageBulk: [Function: createScheduledPackageBulk]
    }
  },
  externalFulfillmentInventory: {
    __versions: [ '2024-09-11' ],
    __operations: [ 'batchInventory' ],
    '2024-09-11': { batchInventory: [Function: batchInventory] }
  },
  externalFulfillmentReturns: {
    __versions: [ '2024-09-11' ],
    __operations: [ 'listReturns', 'getReturn' ],
    '2024-09-11': {
      listReturns: [Function: listReturns],
      getReturn: [Function: getReturn]
    }
  },
  externalFulfillmentShipping: {
    __versions: [ '2024-09-11' ],
    __operations: [
      'getShipments',
      'getShipment',
      'processShipment',
      'createPackages',
      'updatePackage',
      'updatePackageStatus',
      'retrieveShippingOptions',
      'generateInvoice',
      'retrieveInvoice',
      'generateShipLabels'
    ],
    '2024-09-11': {
      getShipments: [Function: getShipments],
      getShipment: [Function: getShipment],
      processShipment: [Function: processShipment],
      createPackages: [Function: createPackages],
      updatePackage: [Function: updatePackage],
      updatePackageStatus: [Function: updatePackageStatus],
      retrieveShippingOptions: [Function: retrieveShippingOptions],
      generateInvoice: [Function: generateInvoice],
      retrieveInvoice: [Function: retrieveInvoice],
      generateShipLabels: [Function: generateShipLabels]
    }
  },
  fbaInboundEligibility: {
    __versions: [ 'v1' ],
    __operations: [ 'getItemEligibilityPreview' ],
    v1: {
      getItemEligibilityPreview: [Function: getItemEligibilityPreview]
    }
  },
  fbaInventory: {
    __versions: [ 'v1' ],
    __operations: [
      'getInventorySummaries',
      'createInventoryItem',
      'deleteInventoryItem',
      'addInventory'
    ],
    v1: {
      getInventorySummaries: [Function: getInventorySummaries],
      createInventoryItem: [Function: createInventoryItem],
      deleteInventoryItem: [Function: deleteInventoryItem],
      addInventory: [Function: addInventory]
    }
  },
  feeds: {
    __versions: [ '2021-06-30' ],
    __operations: [
      'getFeeds',
      'createFeed',
      'getFeed',
      'cancelFeed',
      'createFeedDocument',
      'getFeedDocument'
    ],
    '2021-06-30': {
      getFeeds: [Function: getFeeds],
      createFeed: [Function: createFeed],
      getFeed: [Function: getFeed],
      cancelFeed: [Function: cancelFeed],
      createFeedDocument: [Function: createFeedDocument],
      getFeedDocument: [Function: getFeedDocument]
    }
  },
  finances: {
    __versions: [ 'v0', '2024-06-19' ],
    __operations: [
      'listFinancialEventGroups',
      'listFinancialEventsByGroupId',
      'listFinancialEventsByOrderId',
      'listFinancialEvents',
      'listTransactions'
    ],
    v0: {
      listFinancialEventGroups: [Function: listFinancialEventGroups],
      listFinancialEventsByGroupId: [Function: listFinancialEventsByGroupId],
      listFinancialEventsByOrderId: [Function: listFinancialEventsByOrderId],
      listFinancialEvents: [Function: listFinancialEvents]
    },
    '2024-06-19': { listTransactions: [Function: listTransactions] }
  },
  fulfillmentInbound: {
    __versions: [ 'v0', '2024-03-20' ],
    __operations: [
      'getPrepInstructions',
      'getLabels',
      'getBillOfLading',
      'getShipments',
      'getShipmentItemsByShipmentId',
      'getShipmentItems',
      'listInboundPlans',
      'createInboundPlan',
      'getInboundPlan',
      'listInboundPlanBoxes',
      'cancelInboundPlan',
      'listInboundPlanItems',
      'updateInboundPlanName',
      'listPackingGroupBoxes',
      'listPackingGroupItems',
      'setPackingInformation',
      'listPackingOptions',
      'generatePackingOptions',
      'confirmPackingOption',
      'listInboundPlanPallets',
      'listPlacementOptions',
      'generatePlacementOptions',
      'confirmPlacementOption',
      'getShipment',
      'listShipmentBoxes',
      'listShipmentContentUpdatePreviews',
      'generateShipmentContentUpdatePreviews',
      'getShipmentContentUpdatePreview',
      'confirmShipmentContentUpdatePreview',
      'getDeliveryChallanDocument',
      'listDeliveryWindowOptions',
      'generateDeliveryWindowOptions',
      'confirmDeliveryWindowOptions',
      'listShipmentItems',
      'updateShipmentName',
      'listShipmentPallets',
      'cancelSelfShipAppointment',
      'getSelfShipAppointmentSlots',
      'generateSelfShipAppointmentSlots',
      'scheduleSelfShipAppointment',
      'updateShipmentSourceAddress',
      'updateShipmentTrackingDetails',
      'listTransportationOptions',
      'generateTransportationOptions',
      'confirmTransportationOptions',
      'updateItemComplianceDetails',
      'createMarketplaceItemLabels',
      'getInboundOperationStatus',
      'listPrepDetails',
      'setPrepDetails'
    ],
    v0: {
      getPrepInstructions: [Function: getPrepInstructions],
      getLabels: [Function: getLabels],
      getBillOfLading: [Function: getBillOfLading],
      getShipments: [Function: getShipments],
      getShipmentItemsByShipmentId: [Function: getShipmentItemsByShipmentId],
      getShipmentItems: [Function: getShipmentItems]
    },
    '2024-03-20': {
      listInboundPlans: [Function: listInboundPlans],
      createInboundPlan: [Function: createInboundPlan],
      getInboundPlan: [Function: getInboundPlan],
      listInboundPlanBoxes: [Function: listInboundPlanBoxes],
      cancelInboundPlan: [Function: cancelInboundPlan],
      listInboundPlanItems: [Function: listInboundPlanItems],
      updateInboundPlanName: [Function: updateInboundPlanName],
      listPackingGroupBoxes: [Function: listPackingGroupBoxes],
      listPackingGroupItems: [Function: listPackingGroupItems],
      setPackingInformation: [Function: setPackingInformation],
      listPackingOptions: [Function: listPackingOptions],
      generatePackingOptions: [Function: generatePackingOptions],
      confirmPackingOption: [Function: confirmPackingOption],
      listInboundPlanPallets: [Function: listInboundPlanPallets],
      listPlacementOptions: [Function: listPlacementOptions],
      generatePlacementOptions: [Function: generatePlacementOptions],
      confirmPlacementOption: [Function: confirmPlacementOption],
      getShipment: [Function: getShipment],
      listShipmentBoxes: [Function: listShipmentBoxes],
      listShipmentContentUpdatePreviews: [Function: listShipmentContentUpdatePreviews],
      generateShipmentContentUpdatePreviews: [Function: generateShipmentContentUpdatePreviews],
      getShipmentContentUpdatePreview: [Function: getShipmentContentUpdatePreview],
      confirmShipmentContentUpdatePreview: [Function: confirmShipmentContentUpdatePreview],
      getDeliveryChallanDocument: [Function: getDeliveryChallanDocument],
      listDeliveryWindowOptions: [Function: listDeliveryWindowOptions],
      generateDeliveryWindowOptions: [Function: generateDeliveryWindowOptions],
      confirmDeliveryWindowOptions: [Function: confirmDeliveryWindowOptions],
      listShipmentItems: [Function: listShipmentItems],
      updateShipmentName: [Function: updateShipmentName],
      listShipmentPallets: [Function: listShipmentPallets],
      cancelSelfShipAppointment: [Function: cancelSelfShipAppointment],
      getSelfShipAppointmentSlots: [Function: getSelfShipAppointmentSlots],
      generateSelfShipAppointmentSlots: [Function: generateSelfShipAppointmentSlots],
      scheduleSelfShipAppointment: [Function: scheduleSelfShipAppointment],
      updateShipmentSourceAddress: [Function: updateShipmentSourceAddress],
      updateShipmentTrackingDetails: [Function: updateShipmentTrackingDetails],
      listTransportationOptions: [Function: listTransportationOptions],
      generateTransportationOptions: [Function: generateTransportationOptions],
      confirmTransportationOptions: [Function: confirmTransportationOptions],
      updateItemComplianceDetails: [Function: updateItemComplianceDetails],
      createMarketplaceItemLabels: [Function: createMarketplaceItemLabels],
      listPrepDetails: [Function: listPrepDetails],
      setPrepDetails: [Function: setPrepDetails],
      getInboundOperationStatus: [Function: getInboundOperationStatus]
    }
  },
  fulfillmentOutbound: {
    __versions: [ '2020-07-01' ],
    __operations: [
      'getFulfillmentPreview',
      'deliveryOffers',
      'listAllFulfillmentOrders',
      'createFulfillmentOrder',
      'getPackageTrackingDetails',
      'listReturnReasonCodes',
      'createFulfillmentReturn',
      'getFulfillmentOrder',
      'updateFulfillmentOrder',
      'cancelFulfillmentOrder',
      'submitFulfillmentOrderStatusUpdate',
      'getFeatures',
      'getFeatureInventory',
      'getFeatureSKU'
    ],
    '2020-07-01': {
      getFulfillmentPreview: [Function: getFulfillmentPreview],
      deliveryOffers: [Function: deliveryOffers],
      listAllFulfillmentOrders: [Function: listAllFulfillmentOrders],
      createFulfillmentOrder: [Function: createFulfillmentOrder],
      getPackageTrackingDetails: [Function: getPackageTrackingDetails],
      listReturnReasonCodes: [Function: listReturnReasonCodes],
      createFulfillmentReturn: [Function: createFulfillmentReturn],
      getFulfillmentOrder: [Function: getFulfillmentOrder],
      updateFulfillmentOrder: [Function: updateFulfillmentOrder],
      cancelFulfillmentOrder: [Function: cancelFulfillmentOrder],
      submitFulfillmentOrderStatusUpdate: [Function: submitFulfillmentOrderStatusUpdate],
      getFeatures: [Function: getFeatures],
      getFeatureInventory: [Function: getFeatureInventory],
      getFeatureSKU: [Function: getFeatureSKU]
    }
  },
  invoices: {
    __versions: [ '2024-06-19' ],
    __operations: [
      'getInvoicesAttributes',
      'getInvoicesDocument',
      'getInvoicesExports',
      'createInvoicesExport',
      'getInvoicesExport',
      'getInvoices',
      'getInvoice'
    ],
    '2024-06-19': {
      getInvoicesAttributes: [Function: getInvoicesAttributes],
      getInvoicesDocument: [Function: getInvoicesDocument],
      getInvoicesExports: [Function: getInvoicesExports],
      createInvoicesExport: [Function: createInvoicesExport],
      getInvoicesExport: [Function: getInvoicesExport]
    }
  },
  listingsItems: {
    __versions: [ '2020-09-01', '2021-08-01' ],
    __operations: [
      'getListingsItem',
      'putListingsItem',
      'deleteListingsItem',
      'patchListingsItem',
      'searchListingsItems'
    ],
    '2020-09-01': {
      putListingsItem: [Function: putListingsItem],
      deleteListingsItem: [Function: deleteListingsItem],
      patchListingsItem: [Function: patchListingsItem]
    },
    '2021-08-01': {
      getListingsItem: [Function: getListingsItem],
      searchListingsItems: [Function: searchListingsItems],
      putListingsItem: [Function: putListingsItem],
      deleteListingsItem: [Function: deleteListingsItem],
      patchListingsItem: [Function: patchListingsItem]
    }
  },
  listingsRestrictions: {
    __versions: [ '2021-08-01' ],
    __operations: [ 'getListingsRestrictions' ],
    '2021-08-01': { getListingsRestrictions: [Function: getListingsRestrictions] }
  },
  merchantFulfillment: {
    __versions: [ 'v0' ],
    __operations: [
      'getEligibleShipmentServices',
      'getShipment',
      'cancelShipment',
      'createShipment',
      'getAdditionalSellerInputs'
    ],
    v0: {
      getEligibleShipmentServices: [Function: getEligibleShipmentServices],
      getShipment: [Function: getShipment],
      cancelShipment: [Function: cancelShipment],
      createShipment: [Function: createShipment],
      getAdditionalSellerInputs: [Function: getAdditionalSellerInputs]
    }
  },
  messaging: {
    __versions: [ 'v1' ],
    __operations: [
      'getMessagingActionsForOrder',
      'confirmCustomizationDetails',
      'createConfirmDeliveryDetails',
      'createLegalDisclosure',
      'createNegativeFeedbackRemoval',
      'createConfirmOrderDetails',
      'createConfirmServiceDetails',
      'CreateAmazonMotors',
      'CreateWarranty',
      'GetAttributes',
      'createDigitalAccessKey',
      'createUnexpectedProblem',
      'sendInvoice'
    ],
    v1: {
      getMessagingActionsForOrder: [Function: getMessagingActionsForOrder],
      confirmCustomizationDetails: [Function: confirmCustomizationDetails],
      createConfirmDeliveryDetails: [Function: createConfirmDeliveryDetails],
      createLegalDisclosure: [Function: createLegalDisclosure],
      createNegativeFeedbackRemoval: [Function: createNegativeFeedbackRemoval],
      createConfirmOrderDetails: [Function: createConfirmOrderDetails],
      createConfirmServiceDetails: [Function: createConfirmServiceDetails],
      CreateAmazonMotors: [Function: CreateAmazonMotors],
      CreateWarranty: [Function: CreateWarranty],
      GetAttributes: [Function: GetAttributes],
      createDigitalAccessKey: [Function: createDigitalAccessKey],
      createUnexpectedProblem: [Function: createUnexpectedProblem],
      sendInvoice: [Function: sendInvoice]
    }
  },
  notifications: {
    __versions: [ 'v1' ],
    __operations: [
      'getSubscription',
      'createSubscription',
      'getSubscriptionById',
      'deleteSubscriptionById',
      'getDestinations',
      'createDestination',
      'getDestination',
      'deleteDestination'
    ],
    v1: {
      getSubscription: [Function: getSubscription],
      createSubscription: [Function: createSubscription],
      getSubscriptionById: [Function: getSubscriptionById],
      deleteSubscriptionById: [Function: deleteSubscriptionById],
      getDestinations: [Function: getDestinations],
      createDestination: [Function: createDestination],
      getDestination: [Function: getDestination],
      deleteDestination: [Function: deleteDestination]
    }
  },
  orders: {
    __versions: [ 'v0' ],
    __operations: [
      'getOrders',
      'getOrder',
      'getOrderBuyerInfo',
      'getOrderAddress',
      'getOrderItems',
      'getOrderItemsBuyerInfo',
      'updateShipmentStatus',
      'getOrderRegulatedInfo',
      'updateVerificationStatus',
      'confirmShipment'
    ],
    v0: {
      getOrders: [Function: getOrders],
      getOrder: [Function: getOrder],
      getOrderBuyerInfo: [Function: getOrderBuyerInfo],
      getOrderAddress: [Function: getOrderAddress],
      getOrderItems: [Function: getOrderItems],
      getOrderItemsBuyerInfo: [Function: getOrderItemsBuyerInfo],
      updateShipmentStatus: [Function: updateShipmentStatus],
      getOrderRegulatedInfo: [Function: getOrderRegulatedInfo],
      updateVerificationStatus: [Function: updateVerificationStatus],
      confirmShipment: [Function: confirmShipment]
    }
  },
  productFees: {
    __versions: [ 'v0' ],
    __operations: [
      'getMyFeesEstimateForSKU',
      'getMyFeesEstimateForASIN',
      'getMyFeesEstimates'
    ],
    v0: {
      getMyFeesEstimateForSKU: [Function: getMyFeesEstimateForSKU],
      getMyFeesEstimateForASIN: [Function: getMyFeesEstimateForASIN],
      getMyFeesEstimates: [Function: getMyFeesEstimates]
    }
  },
  productPricing: {
    __versions: [ 'v0', '2022-05-01' ],
    __operations: [
      'getPricing',
      'getCompetitivePricing',
      'getListingOffers',
      'getItemOffers',
      'getItemOffersBatch',
      'getListingOffersBatch',
      'getFeaturedOfferExpectedPriceBatch',
      'getCompetitiveSummary'
    ],
    v0: {
      getPricing: [Function: getPricing],
      getCompetitivePricing: [Function: getCompetitivePricing],
      getListingOffers: [Function: getListingOffers],
      getItemOffers: [Function: getItemOffers],
      getItemOffersBatch: [Function: getItemOffersBatch],
      getListingOffersBatch: [Function: getListingOffersBatch]
    },
    '2022-05-01': {
      getFeaturedOfferExpectedPriceBatch: [Function: getFeaturedOfferExpectedPriceBatch],
      getCompetitiveSummary: [Function: getCompetitiveSummary]
    }
  },
  productTypeDefinitions: {
    __versions: [ '2020-09-01' ],
    __operations: [ 'searchDefinitionsProductTypes', 'getDefinitionsProductType' ],
    '2020-09-01': {
      searchDefinitionsProductTypes: [Function: searchDefinitionsProductTypes],
      getDefinitionsProductType: [Function: getDefinitionsProductType]
    }
  },
  replenishment: {
    __versions: [ '2022-11-07' ],
    __operations: [ 'getSellingPartnerMetrics', 'listOfferMetrics', 'listOffers' ],
    '2022-11-07': {
      getSellingPartnerMetrics: [Function: getSellingPartnerMetrics],
      listOfferMetrics: [Function: listOfferMetrics],
      listOffers: [Function: listOffers]
    }
  },
  reports: {
    __versions: [ '2021-06-30' ],
    __operations: [
      'getReports',
      'createReport',
      'getReport',
      'cancelReport',
      'getReportSchedules',
      'createReportSchedule',
      'getReportSchedule',
      'cancelReportSchedule',
      'getReportDocument'
    ],
    '2021-06-30': {
      getReports: [Function: getReports],
      createReport: [Function: createReport],
      getReport: [Function: getReport],
      cancelReport: [Function: cancelReport],
      getReportSchedules: [Function: getReportSchedules],
      createReportSchedule: [Function: createReportSchedule],
      getReportSchedule: [Function: getReportSchedule],
      cancelReportSchedule: [Function: cancelReportSchedule],
      getReportDocument: [Function: getReportDocument]
    }
  },
  sales: {
    __versions: [ 'v1' ],
    __operations: [ 'getOrderMetrics' ],
    v1: { getOrderMetrics: [Function: getOrderMetrics] }
  },
  sellers: {
    __versions: [ 'v1' ],
    __operations: [ 'getMarketplaceParticipations', 'getAccount' ],
    v1: {
      getMarketplaceParticipations: [Function: getMarketplaceParticipations],
      getAccount: [Function: getAccount]
    }
  },
  sellerWallet: {
    __versions: [ '2024-03-01' ],
    __operations: [
      'listAccounts',
      'getAccount',
      'listAccountBalances',
      'getTransferPreview',
      'listAccountTransactions',
      'createTransaction',
      'getTransaction',
      'listTransferSchedules',
      'createTransferSchedule',
      'updateTransferSchedule',
      'getTransferSchedule',
      'deleteScheduleTransaction'
    ],
    '2024-03-01': {
      listAccounts: [Function: listAccounts],
      getAccount: [Function: getAccount],
      listAccountBalances: [Function: listAccountBalances],
      getTransferPreview: [Function: getTransferPreview],
      listAccountTransactions: [Function: listAccountTransactions],
      createTransaction: [Function: createTransaction],
      getTransaction: [Function: getTransaction],
      listTransferSchedules: [Function: listTransferSchedules],
      createTransferSchedule: [Function: createTransferSchedule],
      updateTransferSchedule: [Function: updateTransferSchedule],
      getTransferSchedule: [Function: getTransferSchedule],
      deleteScheduleTransaction: [Function: deleteScheduleTransaction]
    }
  },
  services: {
    __versions: [ 'v1' ],
    __operations: [
      'getServiceJobByServiceJobId',
      'cancelServiceJobByServiceJobId',
      'completeServiceJobByServiceJobId',
      'getServiceJobs',
      'addAppointmentForServiceJobByServiceJobId',
      'rescheduleAppointmentForServiceJobByServiceJobId',
      'assignAppointmentResources',
      'setAppointmentFulfillmentData',
      'getRangeSlotCapacity',
      'getFixedSlotCapacity',
      'updateSchedule',
      'createReservation',
      'updateReservation',
      'cancelReservation',
      'getAppointmentSlotsByJobId',
      'getAppointmentSlots',
      'createServiceDocumentUploadDestination'
    ],
    v1: {
      getServiceJobByServiceJobId: [Function: getServiceJobByServiceJobId],
      cancelServiceJobByServiceJobId: [Function: cancelServiceJobByServiceJobId],
      completeServiceJobByServiceJobId: [Function: completeServiceJobByServiceJobId],
      getServiceJobs: [Function: getServiceJobs],
      addAppointmentForServiceJobByServiceJobId: [Function: addAppointmentForServiceJobByServiceJobId],
      rescheduleAppointmentForServiceJobByServiceJobId: [Function: rescheduleAppointmentForServiceJobByServiceJobId],
      assignAppointmentResources: [Function: assignAppointmentResources],
      setAppointmentFulfillmentData: [Function: setAppointmentFulfillmentData],
      getRangeSlotCapacity: [Function: getRangeSlotCapacity],
      getFixedSlotCapacity: [Function: getFixedSlotCapacity],
      updateSchedule: [Function: updateSchedule],
      createReservation: [Function: createReservation],
      updateReservation: [Function: updateReservation],
      cancelReservation: [Function: cancelReservation],
      getAppointmentSlotsByJobId: [Function: getAppointmentSlotsByJobId],
      getAppointmmentSlots: [Function: getAppointmmentSlots],
      createServiceDocumentUploadDestination: [Function: createServiceDocumentUploadDestination]
    }
  },
  shipmentInvoicing: {
    __versions: [ 'v0' ],
    __operations: [ 'getShipmentDetails', 'submitInvoice', 'getInvoiceStatus' ],
    v0: {
      getShipmentDetails: [Function: getShipmentDetails],
      submitInvoice: [Function: submitInvoice],
      getInvoiceStatus: [Function: getInvoiceStatus]
    }
  },
  shipping: {
    __versions: [ 'v1', 'v2' ],
    __operations: [
      'createShipment',
      'getShipment',
      'cancelShipment',
      'purchaseLabels',
      'retrieveShippingLabel',
      'purchaseShipment',
      'oneClickShipment',
      'getRates',
      'getAccount',
      'getTrackingInformation',
      'getTracking',
      'getShipmentDocuments',
      'getAccessPoints',
      'submitNdrFeedback',
      'getAdditionalInputs',
      'directPurchaseShipment'
    ],
    v1: {
      createShipment: [Function: createShipment],
      getShipment: [Function: getShipment],
      cancelShipment: [Function: cancelShipment],
      purchaseLabels: [Function: purchaseLabels],
      retrieveShippingLabel: [Function: retrieveShippingLabel],
      purchaseShipment: [Function: purchaseShipment],
      getRates: [Function: getRates],
      getAccount: [Function: getAccount],
      getTrackingInformation: [Function: getTrackingInformation]
    },
    v2: {
      getRates: [Function: getRates],
      purchaseShipment: [Function: purchaseShipment],
      oneClickShipment: [Function: oneClickShipment],
      getTracking: [Function: getTracking],
      getShipmentDocuments: [Function: getShipmentDocuments],
      cancelShipment: [Function: cancelShipment],
      getAccessPoints: [Function: getAccessPoints],
      submitNdrFeedback: [Function: submitNdrFeedback],
      getAdditionalInputs: [Function: getAdditionalInputs],
      directPurchaseShipment: [Function: directPurchaseShipment]
    }
  },
  solicitations: {
    __versions: [ 'v1' ],
    __operations: [
      'getSolicitationActionsForOrder',
      'createProductReviewAndSellerFeedbackSolicitation'
    ],
    v1: {
      getSolicitationActionsForOrder: [Function: getSolicitationActionsForOrder],
      createProductReviewAndSellerFeedbackSolicitation: [Function: createProductReviewAndSellerFeedbackSolicitation]
    }
  },
  supplySources: {
    __versions: [ '2020-07-01' ],
    __operations: [
      'getSupplySources',
      'createSupplySource',
      'getSupplySource',
      'updateSupplySource',
      'archiveSupplySource',
      'updateSupplySourceStatus'
    ],
    '2020-07-01': {
      getSupplySources: [Function: getSupplySources],
      createSupplySource: [Function: createSupplySource],
      getSupplySource: [Function: getSupplySource],
      updateSupplySource: [Function: updateSupplySource],
      archiveSupplySource: [Function: archiveSupplySource],
      updateSupplySourceStatus: [Function: updateSupplySourceStatus]
    }
  },
  tokens: {
    __versions: [ '2021-03-01' ],
    __operations: [ 'createRestrictedDataToken' ],
    '2021-03-01': {
      createRestrictedDataToken: [Function: createRestrictedDataToken]
    }
  },
  transfers: {
    __versions: [ '2024-06-01' ],
    __operations: [ 'initiatePayout', 'getPaymentMethods' ],
    '2024-06-01': {
      initiatePayout: [Function: initiatePayout],
      getPaymentMethods: [Function: getPaymentMethods]
    }
  },
  uploads: {
    __versions: [ '2020-11-01' ],
    __operations: [ 'createUploadDestinationForResource' ],
    '2020-11-01': {
      createUploadDestinationForResource: [Function: createUploadDestinationForResource]
    }
  },
  vehicles: {
    __versions: [ '2024-11-01' ],
    __operations: [ 'getVehicles' ],
    '2024-11-01': { getVehicles: [Function: getVehicles] }
  },
  vendorDirectFulfillmentInventory: {
    __versions: [ 'v1' ],
    __operations: [ 'submitInventoryUpdate' ],
    v1: { submitInventoryUpdate: [Function: submitInventoryUpdate] }
  },
  vendorDirectFulfillmentOrders: {
    __versions: [ 'v1', '2021-12-28' ],
    __operations: [ 'getOrders', 'getOrder', 'submitAcknowledgement' ],
    v1: {
      getOrders: [Function: getOrders],
      getOrder: [Function: getOrder],
      submitAcknowledgement: [Function: submitAcknowledgement]
    },
    '2021-12-28': {
      getOrders: [Function: getOrders],
      getOrder: [Function: getOrder],
      submitAcknowledgement: [Function: submitAcknowledgement]
    }
  },
  vendorDirectFulfillmentPayments: {
    __versions: [ 'v1' ],
    __operations: [ 'submitInvoice' ],
    v1: { submitInvoice: [Function: submitInvoice] }
  },
  vendorDirectFulfillmentSandboxTestData: {
    __versions: [ '2021-10-28' ],
    __operations: [ 'generateOrderScenarios', 'getOrderScenarios' ],
    '2021-10-28': {
      generateOrderScenarios: [Function: generateOrderScenarios],
      getOrderScenarios: [Function: getOrderScenarios]
    }
  },
  vendorDirectFulfillmentShipping: {
    __versions: [ 'v1', '2021-12-28' ],
    __operations: [
      'getShippingLabels',
      'submitShippingLabelRequest',
      'getShippingLabel',
      'createShippingLabels',
      'submitShipmentConfirmations',
      'submitShipmentStatusUpdates',
      'getCustomerInvoices',
      'getCustomerInvoice',
      'getPackingSlips',
      'getPackingSlip',
      'createContainerLabel'
    ],
    v1: {
      getShippingLabels: [Function: getShippingLabels],
      submitShippingLabelRequest: [Function: submitShippingLabelRequest],
      getShippingLabel: [Function: getShippingLabel],
      submitShipmentConfirmations: [Function: submitShipmentConfirmations],
      submitShipmentStatusUpdates: [Function: submitShipmentStatusUpdates],
      getCustomerInvoices: [Function: getCustomerInvoices],
      getCustomerInvoice: [Function: getCustomerInvoice],
      getPackingSlips: [Function: getPackingSlips],
      getPackingSlip: [Function: getPackingSlip]
    },
    '2021-12-28': {
      getShippingLabels: [Function: getShippingLabels],
      submitShippingLabelRequest: [Function: submitShippingLabelRequest],
      getShippingLabel: [Function: getShippingLabel],
      createShippingLabels: [Function: createShippingLabels],
      submitShipmentConfirmations: [Function: submitShipmentConfirmations],
      submitShipmentStatusUpdates: [Function: submitShipmentStatusUpdates],
      getCustomerInvoices: [Function: getCustomerInvoices],
      getCustomerInvoice: [Function: getCustomerInvoice],
      getPackingSlips: [Function: getPackingSlips],
      getPackingSlip: [Function: getPackingSlip],
      createContainerLabel: [Function: createContainerLabel]
    }
  },
  vendorDirectFulfillmentTransactions: {
    __versions: [ 'v1', '2021-12-28' ],
    __operations: [ 'getTransactionStatus' ],
    v1: { getTransactionStatus: [Function: getTransactionStatus] },
    '2021-12-28': { getTransactionStatus: [Function: getTransactionStatus] }
  },
  vendorInvoices: {
    __versions: [ 'v1' ],
    __operations: [ 'submitInvoices' ],
    v1: { submitInvoices: [Function: submitInvoices] }
  },
  vendorOrders: {
    __versions: [ 'v1' ],
    __operations: [
      'getPurchaseOrders',
      'getPurchaseOrder',
      'submitAcknowledgement',
      'getPurchaseOrdersStatus'
    ],
    v1: {
      getPurchaseOrders: [Function: getPurchaseOrders],
      getPurchaseOrder: [Function: getPurchaseOrder],
      submitAcknowledgement: [Function: submitAcknowledgement],
      getPurchaseOrdersStatus: [Function: getPurchaseOrdersStatus]
    }
  },
  vendorShipments: {
    __versions: [ 'v1' ],
    __operations: [
      'SubmitShipmentConfirmations',
      'GetShipmentDetails',
      'SubmitShipments',
      'GetShipmentLabels'
    ],
    v1: {
      SubmitShipmentConfirmations: [Function: SubmitShipmentConfirmations],
      GetShipmentDetails: [Function: GetShipmentDetails],
      SubmitShipments: [Function: SubmitShipments],
      GetShipmentLabels: [Function: GetShipmentLabels]
    }
  },
  vendorTransactionStatus: {
    __versions: [ 'v1' ],
    __operations: [ 'getTransaction' ],
    v1: { getTransaction: [Function: getTransaction] }
  }
}

