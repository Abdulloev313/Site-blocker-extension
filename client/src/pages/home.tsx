import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiHeader } from "@/shared/ui/ui-header";
import { SignOutButton } from "@/features/auth";
import { useSessionQuery } from "@/entities/session/queries";

export function HomePage() {
  const { data } = useSessionQuery();
  return (
    <main className={"min-h-screen"}>
      <UiHeader
        right={
          <div>
            {data?.email}
            <SignOutButton></SignOutButton>
          </div>
        }
      />
      <UiButton variant="primary">hds</UiButton>
      <UiButton variant="secondary">hsd</UiButton>
      <UiButton disabled variant="outlined">
        hksd
      </UiButton>
      <UiTextField
        label="Text Field"
        inputProps={{ placeholder: "Enter email" }}
      />
      <UiTextField
        error="Text Field"
        inputProps={{ placeholder: "Enter email" }}
      />
      <UiTextField inputProps={{ placeholder: "Enter email" }} />
      <UiSelectField
        selectProps={{}}
        options={[{ value: "1", label: "options" }]}
      />
      <UiLink href={"/"}>lnfedls</UiLink>
      <UiSpinner className={"text-teal-600 w-20 h-20"} />
      {/* <UiPageSpinner></UiPageSpinner> */}
    </main>
  );
}
