export const STRING_CONSTANTS = {
  OTHERS: "Others",
  ELASTICACHE: "Elasticache",
  OPEN_SEARCH: "OpenSearch",
  S3: "S3",
  RDS: "RDS",
  EC2: "EC2",
  ARROW: "arrow",
  CODE_ICON: "codeIcon",
  CHEVRON_ICON: "chevronIcon",
  LOGO: "logo",
  JAVASCRIPT: "javascript",
  QUERY: "Query",
  USER_ICON: "userIcon",
  INNER_TEXT: {
    PRODUCTION_RESULT:
      "Your production account (#24542) has accumulated costs of $100,000 over the past month, here is a spread of cloud costs by services;",
    PIE_CHART: "Pie Chart",
    COLUMN_CONTAINER: "You might also want to know",
    AREA_CONTAINER:
      "This bucket has abnormally high reads and writes cost of $5000 per month, increasing by the day. Consider reading smaller chunks of data or changing your storage that is more cost effective for reads and writes",
    PRODUCTION_ACCOUNT: "Bucket abc-user-1 (production account #12345)",
    LOWER_TIER:
      "This bucket has 1 TB of data, and it does not use any storage tiers. There is more than 500 GB of data that has not been accessed. You can save $1000 by deleting that data or $700 by moving them to lower tier",
    BUCKET: "Bucket xyz-logs-1 (production account #12345)",
    SAVINGS_AREA: "Top 2 saving areas",
    AREA: "Here are your top 2 saving areas:",
    SEARCH_RESULTS:
      "Top cloud costs by services in production account (#24542)",
    TOP_SEARCH_RESULTS: "How can I reduce my EC2 costs?",
    EC2_COSTS: "Why are EC2 costs increasing so much?",
    DASHBOARD: "dashboard",
  },
  SNIPPET: {
    SELECT: "1. SELECT",
    SERVICE: "2.    service,",
    TOTAL_COST: "3.    SUM(cost) AS total_cost ",
    FROM: "4. FROM",
    CLOUD_COSTS: "5.    cloud_costs",
    WHERE: "6. WHERE",
    ACCOUNT_TYPE: "7.    account_type = 'production (#24542)'",
    GROUP_BY: "8. GROUP BY",
    SERVICES: "9.   service",
    ORDER_BY: "10. ORDER BY",
    DESC: "11.  total_cost DESC",
  },
};

export const questions = [
  [
    {
      text: "Top cloud costs by services in production account (#24542)",
      disable: false,
    },
    {
      text: "Which application's cost are increasing the fastest?",
      disable: true,
    },
    {
      text: "How much money are we losing by not moving to graviton instances?",
      disable: true,
    },
    {
      text: "Which are the largest 3 buckets by size?",
      disable: true,
    },
  ],
  [
    {
      text: "Which services costs are rising the fastest?",
      disable: true,
    },
    {
      text: "How can I reduce my $3 costs?",
      disable: true,
    },
    {
      text: "How can I reduce my RDS. costs?",
      disable: true,
    },
    {
      text: "How can I reduce my EC2 costs?",
      disable: false,
    },
  ],
  [
    {
      text: "Which services costs are rising the fastest?",
      disable: true,
    },
    {
      text: "How can I reduce my S3 costs?",
      disable: true,
    },
    {
      text: "How can I reduce my RDS costs?",
      disable: true,
    },
    {
      text: "Why are EC2 costs increasing so much?",
      disable: false,
    },
  ],
];
