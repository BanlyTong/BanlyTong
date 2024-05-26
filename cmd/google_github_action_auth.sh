project=nimble-service-416910
wip=projects/637407567723/locations/global/workloadIdentityPools/github
wipp=projects/637407567723/locations/global/workloadIdentityPools/github/providers/rocket-provider



gcloud iam workload-identity-pools create "github" \
  --project="nimble-service-416910" \
  --location="global" \
  --display-name="GitHub Actions Pool"

# TODO: replace ${PROJECT_ID} with your value below.

gcloud iam workload-identity-pools describe "github" \
  --project="nimble-service-416910" \
  --location="global" \
  --format="value(name)"

# TODO: replace ${PROJECT_ID} and ${GITHUB_ORG} with your values below.

gcloud iam workload-identity-pools providers create-oidc "rocket-provider" \
  --project="nimble-service-416910" \
  --location="global" \
  --workload-identity-pool="github" \
  --display-name="My GitHub repo Provider" \
  --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner" \
  --attribute-condition="assertion.repository_owner == 'BanlyTong'" \
  --issuer-uri="https://token.actions.githubusercontent.com"

# TODO: replace ${PROJECT_ID}, ${WORKLOAD_IDENTITY_POOL_ID}, and ${REPO}
# with your values below.
#
# ${REPO} is the full repo name including the parent GitHub organization,
# such as "my-org/my-repo".
#
# ${WORKLOAD_IDENTITY_POOL_ID} is the full pool id, such as
# "projects/123456789/locations/global/workloadIdentityPools/github".

gcloud iam service-accounts add-iam-policy-binding "rocket-service-account@nimble-service-416910.iam.gserviceaccount.com" \
  --project="nimble-service-416910" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/637407567723/locations/global/workloadIdentityPools/github/attribute.repository/BanlyTong/BanlyTong"

gcloud iam workload-identity-pools providers describe "rocket-provider" \
  --project="nimble-service-416910" \
  --location="global" \
  --workload-identity-pool="github" \
  --format="value(name)"

gcloud secrets add-iam-policy-binding "my-secret" \
  --project="${PROJECT_ID}" \
  --role="roles/secretmanager.secretAccessor" \
  --member="serviceAccount:my-service-account@${PROJECT_ID}.iam.gserviceaccount.com"
