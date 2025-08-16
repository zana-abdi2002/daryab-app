// SOURCE: https://github.com/clerk/javascript/blob/main/packages/localizations/src/en-US.ts

export const faIR = {
  locale: "fa-IR",
  __experimental_commerce: {
    billedAnnually: "Billed annually",
    cancelSubscription: "Cancel subscription",
    checkout: {
      description__paymentSuccessful: "Your new subscription is all set.",
      description__subscriptionSuccessful: "Your new subscription is all set.",
      emailForm: {
        subtitle:
          "Before you can complete your purchase you must add an email address where receipts will be sent.",
        title: "Add an email address",
      },
      lineItems: {
        title__invoiceId: "Invoice ID",
        title__paymentMethod: "Payment method",
        title__subscriptionBegins: "Subscription begins",
        title__totalPaid: "Total paid",
      },
      title__paymentSuccessful: "Payment was successful!",
      title__subscriptionSuccessful: "Success!",
    },
    free: "Free",
    getStarted: "Get started",
    keepSubscription: "Keep subscription",
    manage: "Manage",
    manageSubscription: "Manage subscription",
    month: "Month",
    reSubscribe: "Re-subscribe",
    switchPlan: "Switch to this plan",
  },
  backButton: "Back",
  badge__currentPlan: "Current Plan",
  badge__default: "Default",
  badge__endsAt: "Ends {{ date | shortDate('en-US') }}",
  badge__expired: "Expired",
  badge__otherImpersonatorDevice: "Other impersonator device",
  badge__primary: "اصلی",
  badge__requiresAction: "Requires action",
  badge__startsAt: "Starts {{ date | shortDate('en-US') }}",
  badge__thisDevice: "وارد شده",
  badge__unverified: "Unverified",
  badge__upcomingPlan: "Upcoming Plan",
  badge__userDevice: "User device",
  badge__you: "You",
  createOrganization: {
    formButtonSubmit: "Create organization",
    invitePage: {
      formButtonReset: "Skip",
    },
    title: "Create organization",
  },
  dates: {
    lastDay: "Yesterday at {{ date | timeString('en-US') }}",
    next6Days:
      "{{ date | weekday('en-US','long') }} at {{ date | timeString('en-US') }}",
    nextDay: "Tomorrow at {{ date | timeString('en-US') }}",
    numeric: "{{ date | numeric('en-US') }}",
    previous6Days:
      "Last {{ date | weekday('en-US','long') }} at {{ date | timeString('en-US') }}",
    sameDay: "Today at {{ date | timeString('en-US') }}",
  },
  dividerText: "یا",
  footerActionLink__useAnotherMethod: "استفاده از روشی دیگر",
  footerPageLink__help: "Help",
  footerPageLink__privacy: "Privacy",
  footerPageLink__terms: "Terms",
  formButtonPrimary: "ادامه",
  formButtonPrimary__verify: "Verify",
  formFieldAction__forgotPassword: "رمز را فراموش کرده‌اید؟",
  formFieldError__matchingPasswords: "Passwords match.",
  formFieldError__notMatchingPasswords: "Passwords don't match.",
  formFieldError__verificationLinkExpired:
    "The verification link expired. Please request a new link.",
  formFieldHintText__optional: "Optional",
  formFieldHintText__slug:
    "A slug is a human-readable ID that must be unique. It’s often used in URLs.",
  formFieldInputPlaceholder__backupCode: "Enter backup code",
  formFieldInputPlaceholder__confirmDeletionUserAccount: "Delete account",
  formFieldInputPlaceholder__emailAddress: "ایمیل خود را وارد کنید",
  formFieldInputPlaceholder__emailAddress_username:
    "ایمیل یا نام کاربری را وارد کنید",
  formFieldInputPlaceholder__emailAddresses:
    "example@email.com, example2@email.com",
  formFieldInputPlaceholder__firstName: "نام",
  formFieldInputPlaceholder__lastName: "نام خانوادگی",
  formFieldInputPlaceholder__organizationDomain: "example.com",
  formFieldInputPlaceholder__organizationDomainEmailAddress: "you@example.com",
  formFieldInputPlaceholder__organizationName: "Organization name",
  formFieldInputPlaceholder__organizationSlug: "my-org",
  formFieldInputPlaceholder__password: "رمز عبور را وارد کنید",
  formFieldInputPlaceholder__phoneNumber: "Enter your phone number",
  formFieldInputPlaceholder__username: undefined,
  formFieldLabel__automaticInvitations:
    "Enable automatic invitations for this domain",
  formFieldLabel__backupCode: "Backup code",
  formFieldLabel__confirmDeletion: "تایید",
  formFieldLabel__confirmPassword: "تایید رمز",
  formFieldLabel__currentPassword: "رمز کنونی",
  formFieldLabel__emailAddress: "آدرس ایمیل",
  formFieldLabel__emailAddress_username: "آدرس ایمیل یا نام کاربری",
  formFieldLabel__emailAddresses: "Email addresses",
  formFieldLabel__firstName: "نام",
  formFieldLabel__lastName: "نام خانوادگی",
  formFieldLabel__newPassword: "رمز جدید",
  formFieldLabel__organizationDomain: "Domain",
  formFieldLabel__organizationDomainDeletePending:
    "Delete pending invitations and suggestions",
  formFieldLabel__organizationDomainEmailAddress: "Verification email address",
  formFieldLabel__organizationDomainEmailAddressDescription:
    "Enter an email address under this domain to receive a code and verify this domain.",
  formFieldLabel__organizationName: "Name",
  formFieldLabel__organizationSlug: "Slug",
  formFieldLabel__passkeyName: "Name of passkey",
  formFieldLabel__password: "رمز عبور",
  formFieldLabel__phoneNumber: "Phone number",
  formFieldLabel__role: "Role",
  formFieldLabel__signOutOfOtherSessions: "خروج از تمامی دستگاه‌های دیگر",
  formFieldLabel__username: "نام کاربری",
  impersonationFab: {
    action__signOut: "Sign out",
    title: "Signed in as {{identifier}}",
  },
  maintenanceMode:
    "We are currently undergoing maintenance, but don't worry, it shouldn't take more than a few minutes.",
  membershipRole__admin: "Admin",
  membershipRole__basicMember: "Member",
  membershipRole__guestMember: "Guest",
  organizationList: {
    action__createOrganization: "Create organization",
    action__invitationAccept: "Join",
    action__suggestionsAccept: "Request to join",
    createOrganization: "Create Organization",
    invitationAcceptedLabel: "Joined",
    subtitle: "to continue to {{applicationName}}",
    suggestionsAcceptedLabel: "Pending approval",
    title: "Choose an account",
    titleWithoutPersonal: "Choose an organization",
  },
  organizationProfile: {
    badge__automaticInvitation: "Automatic invitations",
    badge__automaticSuggestion: "Automatic suggestions",
    badge__manualInvitation: "No automatic enrollment",
    badge__unverified: "Unverified",
    createDomainPage: {
      subtitle:
        "Add the domain to verify. Users with email addresses at this domain can join the organization automatically or request to join.",
      title: "Add domain",
    },
    invitePage: {
      detailsTitle__inviteFailed:
        "The invitations could not be sent. There are already pending invitations for the following email addresses: {{email_addresses}}.",
      formButtonPrimary__continue: "Send invitations",
      selectDropdown__role: "Select role",
      subtitle:
        "Enter or paste one or more email addresses, separated by spaces or commas.",
      successMessage: "Invitations successfully sent",
      title: "Invite new members",
    },
    membersPage: {
      action__invite: "Invite",
      action__search: "Search",
      activeMembersTab: {
        menuAction__remove: "Remove member",
        tableHeader__actions: "Actions",
        tableHeader__joined: "Joined",
        tableHeader__role: "Role",
        tableHeader__user: "User",
      },
      detailsTitle__emptyRow: "No members to display",
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            "Invite users by connecting an email domain with your organization. Anyone who signs up with a matching email domain will be able to join the organization anytime.",
          headerTitle: "Automatic invitations",
          primaryButton: "Manage verified domains",
        },
        table__emptyRow: "No invitations to display",
      },
      invitedMembersTab: {
        menuAction__revoke: "Revoke invitation",
        tableHeader__invited: "Invited",
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            "Users who sign up with a matching email domain, will be able to see a suggestion to request to join your organization.",
          headerTitle: "Automatic suggestions",
          primaryButton: "Manage verified domains",
        },
        menuAction__approve: "Approve",
        menuAction__reject: "Reject",
        tableHeader__requested: "Requested access",
        table__emptyRow: "No requests to display",
      },
      start: {
        headerTitle__invitations: "Invitations",
        headerTitle__members: "Members",
        headerTitle__requests: "Requests",
      },
    },
    navbar: {
      billing: "Billing",
      description: "Manage your organization.",
      general: "General",
      members: "Members",
      title: "Organization",
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription: 'Type "{{organizationName}}" below to continue.',
          messageLine1: "Are you sure you want to delete this organization?",
          messageLine2: "This action is permanent and irreversible.",
          successMessage: "You have deleted the organization.",
          title: "Delete organization",
        },
        leaveOrganization: {
          actionDescription: 'Type "{{organizationName}}" below to continue.',
          messageLine1:
            "Are you sure you want to leave this organization? You will lose access to this organization and its applications.",
          messageLine2: "This action is permanent and irreversible.",
          successMessage: "You have left the organization.",
          title: "Leave organization",
        },
        title: "Danger",
      },
      domainSection: {
        menuAction__manage: "Manage",
        menuAction__remove: "Delete",
        menuAction__verify: "Verify",
        primaryButton: "Add domain",
        subtitle:
          "Allow users to join the organization automatically or request to join based on a verified email domain.",
        title: "Verified domains",
      },
      successMessage: "The organization has been updated.",
      title: "Update profile",
    },
    removeDomainPage: {
      messageLine1: "The email domain {{domain}} will be removed.",
      messageLine2:
        "Users won’t be able to join the organization automatically after this.",
      successMessage: "{{domain}} has been removed.",
      title: "Remove domain",
    },
    start: {
      headerTitle__general: "General",
      headerTitle__members: "Members",
      profileSection: {
        primaryButton: "Update profile",
        title: "Organization Profile",
        uploadAction__title: "Logo",
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel: "Removing this domain will affect invited users.",
        removeDomainActionLabel__remove: "Remove domain",
        removeDomainSubtitle: "Remove this domain from your verified domains",
        removeDomainTitle: "Remove domain",
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          "Users are automatically invited to join the organization when they sign-up and can join anytime.",
        automaticInvitationOption__label: "Automatic invitations",
        automaticSuggestionOption__description:
          "Users receive a suggestion to request to join, but must be approved by an admin before they are able to join the organization.",
        automaticSuggestionOption__label: "Automatic suggestions",
        calloutInfoLabel:
          "Changing the enrollment mode will only affect new users.",
        calloutInvitationCountLabel:
          "Pending invitations sent to users: {{count}}",
        calloutSuggestionCountLabel:
          "Pending suggestions sent to users: {{count}}",
        manualInvitationOption__description:
          "Users can only be invited manually to the organization.",
        manualInvitationOption__label: "No automatic enrollment",
        subtitle:
          "Choose how users from this domain can join the organization.",
      },
      start: {
        headerTitle__danger: "Danger",
        headerTitle__enrollment: "Enrollment options",
      },
      subtitle:
        "The domain {{domain}} is now verified. Continue by selecting enrollment mode.",
      title: "Update {{domain}}",
    },
    verifyDomainPage: {
      formSubtitle: "Enter the verification code sent to your email address",
      formTitle: "Verification code",
      resendButton: "کد را دریافت نکردید؟ ارسال دوباره",
      subtitle: "The domain {{domainName}} needs to be verified via email.",
      subtitleVerificationCodeScreen:
        "A verification code was sent to {{emailAddress}}. Enter the code to continue.",
      title: "Verify domain",
    },
  },
  organizationSwitcher: {
    action__createOrganization: "Create organization",
    action__invitationAccept: "Join",
    action__manageOrganization: "Manage",
    action__suggestionsAccept: "Request to join",
    notSelected: "No organization selected",
    personalWorkspace: "Personal account",
    suggestionsAcceptedLabel: "Pending approval",
  },
  paginationButton__next: "Next",
  paginationButton__previous: "Previous",
  paginationRowText__displaying: "Displaying",
  paginationRowText__of: "of",
  reverification: {
    alternativeMethods: {
      actionLink: "Get help",
      actionText: "Don’t have any of these?",
      blockButton__backupCode: "Use a backup code",
      blockButton__emailCode: "Email code to {{identifier}}",
      blockButton__passkey: "Use your passkey",
      blockButton__password: "Continue with your password",
      blockButton__phoneCode: "Send SMS code to {{identifier}}",
      blockButton__totp: "Use your authenticator app",
      getHelp: {
        blockButton__emailSupport: "Email support",
        content:
          "If you have trouble verifying your account, email us and we will work with you to restore access as soon as possible.",
        title: "Get help",
      },
      subtitle:
        "Facing issues? You can use any of these methods for verification.",
      title: "استفاده از روشی دیگر",
    },
    backupCodeMfa: {
      subtitle:
        "Enter the backup code you received when setting up two-step authentication",
      title: "Enter a backup code",
    },
    emailCode: {
      formTitle: "Verification code",
      resendButton: "کد را دریافت نکردید؟ ارسال دوباره",
      subtitle: "کدی که به ایمیل شما ارسال کردیم را وارد کنید",
      title: "نیاز به راستی آزمایی",
    },
    noAvailableMethods: {
      message:
        "Cannot proceed with verification. No suitable authentication factor is configured",
      subtitle: "An error occurred",
      title: "Cannot verify your account",
    },
    passkey: {
      blockButton__passkey: "Use your passkey",
      subtitle:
        "Using your passkey confirms your identity. Your device may ask for your fingerprint, face, or screen lock.",
      title: "Use your passkey",
    },
    password: {
      actionLink: "استفاده از روشی دیگر",
      subtitle: "Enter your current password to continue",
      title: "نیاز به راستی آزمایی",
    },
    phoneCode: {
      formTitle: "Verification code",
      resendButton: "کد را دریافت نکردید؟ ارسال دوباره",
      subtitle: "Enter the code sent to your phone to continue",
      title: "نیاز به راستی آزمایی",
    },
    phoneCodeMfa: {
      formTitle: "Verification code",
      resendButton: "کد را دریافت نکردید؟ ارسال دوباره",
      subtitle: "Enter the code sent to your phone to continue",
      title: "نیاز به راستی آزمایی",
    },
    totpMfa: {
      formTitle: "Verification code",
      subtitle:
        "Enter the code generated by your authenticator app to continue",
      title: "نیاز به راستی آزمایی",
    },
  },
  signIn: {
    accountSwitcher: {
      action__addAccount: "Add account",
      action__signOutAll: "Sign out of all accounts",
      subtitle: "Select the account with which you wish to continue.",
      title: "Choose an account",
    },
    alternativeMethods: {
      actionLink: "Get help",
      actionText: "Don’t have any of these?",
      blockButton__backupCode: "Use a backup code",
      blockButton__emailCode: "Email code to {{identifier}}",
      blockButton__emailLink: "Email link to {{identifier}}",
      blockButton__passkey: "Sign in with your passkey",
      blockButton__password: "Sign in with your password",
      blockButton__phoneCode: "Send SMS code to {{identifier}}",
      blockButton__totp: "Use your authenticator app",
      getHelp: {
        blockButton__emailSupport: "Email support",
        content:
          "If you have trouble signing into your account, email us and we will work with you to restore access as soon as possible.",
        title: "Get help",
      },
      subtitle: "Facing issues? You can use any of these methods to sign in.",
      title: "استفاده از روشی دیگر",
    },
    backupCodeMfa: {
      subtitle:
        "Your backup code is the one you got when setting up two-step authentication.",
      title: "Enter a backup code",
    },
    emailCode: {
      formTitle: "Verification code",
      resendButton: "کد را دریافت نکردید؟ ارسال دوباره",
      subtitle: "to continue to {{applicationName}}",
      title: "Check your email",
    },
    emailLink: {
      clientMismatch: {
        subtitle:
          "برای ادامه، لینک تأیید را در همان دستگاه و مرورگری که ثبت‌نام را آغاز کرده‌اید باز کنید.",
        title: "لینک تأیید برای این دستگاه معتبر نیست",
      },
      formSubtitle:
        "از لینک تأییدی که به آدرس ایمیل شما ارسال شده استفاده کنید.",
      formTitle: "لینک تأیید",
      loading: {
        title: "در حال ثبت‌نام...",
      },
      resendButton: "لینک را دریافت نکرده‌اید؟ ارسال مجدد",
      subtitle: "برای ادامه به {{applicationName}}",
      title: "ایمیل خود را تأیید کنید",
      verified: {
        title: "ثبت‌نام با موفقیت انجام شد",
      },
      verifiedSwitchTab: {
        subtitle: "برای ادامه، به تب جدیدی که باز شده برگردید.",
        subtitleNewTab: "برای ادامه، به تب قبلی بازگردید.",
        title: "ایمیل با موفقیت تأیید شد",
      },
    },
    forgotPassword: {
      formTitle: "Reset password code",
      resendButton: "کد را دریافت نکردید؟ ارسال دوباره",
      subtitle: "to reset your password",
      subtitle_email: "First, enter the code sent to your email address",
      subtitle_phone: "First, enter the code sent to your phone",
      title: "Reset password",
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: "Reset your password",
      label__alternativeMethods: "Or, sign in with another method",
      title: "رمز را فراموش کرده‌اید؟",
    },
    noAvailableMethods: {
      message:
        "Cannot proceed with sign in. There's no available authentication factor.",
      subtitle: "An error occurred",
      title: "Cannot sign in",
    },
    passkey: {
      subtitle:
        "Using your passkey confirms it's you. Your device may ask for your fingerprint, face or screen lock.",
      title: "Use your passkey",
    },
    password: {
      actionLink: "استفاده از روشی دیگر",
      subtitle: "رمز عبور حساب خود را وارد کنید",
      title: "رمز را وارد کنید",
    },
    passwordPwned: {
      title: "Password compromised",
    },
    phoneCode: {
      formTitle: "Verification code",
      resendButton: "کد را دریافت نکردید؟ ارسال دوباره",
      subtitle: "to continue to {{applicationName}}",
      title: "Check your phone",
    },
    phoneCodeMfa: {
      formTitle: "Verification code",
      resendButton: "کد را دریافت نکردید؟ ارسال دوباره",
      subtitle:
        "To continue, please enter the verification code sent to your phone",
      title: "Check your phone",
    },
    resetPassword: {
      formButtonPrimary: "Reset Password",
      requiredMessage:
        "For security reasons, it is required to reset your password.",
      successMessage:
        "Your password was successfully changed. Signing you in, please wait a moment.",
      title: "تنظیم رمز جدید",
    },
    resetPasswordMfa: {
      detailsLabel:
        "We need to verify your identity before resetting your password.",
    },
    start: {
      actionLink: "ساخت حساب",
      actionLink__join_waitlist: "Join waitlist",
      actionLink__use_email: "Use email",
      actionLink__use_email_username: "Use email or username",
      actionLink__use_passkey: "Use passkey instead",
      actionLink__use_phone: "Use phone",
      actionLink__use_username: "Use username",
      actionText: "حساب کاربری ندارید؟",
      actionText__join_waitlist: "Want early access?",
      subtitle: "خوش آمدید. لطفا برای ادامه وارد شوید",
      subtitleCombined: undefined,
      title: "ورود به {{applicationName}}",
      titleCombined: "Continue to {{applicationName}}",
    },
    totpMfa: {
      formTitle: "کد تایید",
      subtitle: "برای ادامه لطفا کدی که ساخته شده را وارد کنید",
      title: "تایید دو مرحله ای",
    },
  },
  signInEnterPasswordTitle: "رمز عبور را وارد کنید",
  signUp: {
    continue: {
      actionLink: "وارد شوید",
      actionText: "حساب کاربری دارید؟",
      subtitle: "Please fill in the remaining details to continue.",
      title: "Fill in missing fields",
    },
    emailCode: {
      formSubtitle: "لطفا کد تایید ارسال شده به ایمیل را وارد کنید",
      formTitle: "کد تایید",
      resendButton: "کد را دریافت نکردی؟ ارسال دوباره",
      subtitle: "کد تایید ارسال شده به ایمیل را وارد کنید",
      title: "تایید ایمیل",
    },
    emailLink: {
      clientMismatch: {
        subtitle:
          "برای ادامه، لینک تأیید را در همان دستگاه و مرورگری که ثبت‌نام را آغاز کرده‌اید باز کنید.",
        title: "لینک تأیید برای این دستگاه معتبر نیست",
      },
      formSubtitle:
        "از لینک تأییدی که به آدرس ایمیل شما ارسال شده استفاده کنید.",
      formTitle: "لینک تأیید",
      loading: {
        title: "در حال ثبت‌نام...",
      },
      resendButton: "لینک را دریافت نکرده‌اید؟ ارسال مجدد",
      subtitle: "برای ادامه به {{applicationName}}",
      title: "ایمیل خود را تأیید کنید",
      verified: {
        title: "ثبت‌نام با موفقیت انجام شد",
      },
      verifiedSwitchTab: {
        subtitle: "برای ادامه، به تب جدیدی که باز شده برگردید.",
        subtitleNewTab: "برای ادامه، به تب قبلی بازگردید.",
        title: "ایمیل با موفقیت تأیید شد",
      },
    },
    legalConsent: {
      checkbox: {
        label__onlyPrivacyPolicy:
          'I agree to the {{ privacyPolicyLink || link("Privacy Policy") }}',
        label__onlyTermsOfService:
          'I agree to the {{ termsOfServiceLink || link("Terms of Service") }}',
        label__termsOfServiceAndPrivacyPolicy:
          'I agree to the {{ termsOfServiceLink || link("Terms of Service") }} and {{ privacyPolicyLink || link("Privacy Policy") }}',
      },
      continue: {
        subtitle: "Please read and accept the terms to continue",
        title: "Legal consent",
      },
    },
    phoneCode: {
      formSubtitle: "Enter the verification code sent to your phone number",
      formTitle: "Verification code",
      resendButton: "کد را دریافت نکردید؟ ارسال دوباره",
      subtitle: "Enter the verification code sent to your phone",
      title: "Verify your phone",
    },
    restrictedAccess: {
      actionLink: "وارد شوید",
      actionText: "حساب کاربری دارید؟",
      blockButton__emailSupport: "Email support",
      blockButton__joinWaitlist: "Join waitlist",
      subtitle:
        "Sign ups are currently disabled. If you believe you should have access, please contact support.",
      subtitleWaitlist:
        "Sign ups are currently disabled. To be the first to know when we launch, join the waitlist.",
      title: "Access restricted",
    },
    start: {
      actionLink: "وارد شوید",
      actionLink__use_email: "Use email instead",
      actionLink__use_phone: "Use phone instead",
      actionText: "حساب کاربری دارید؟",
      subtitle: "خوش آمدید. لطفا اطلاعات خود را برای ادامه وارد کنید",
      subtitleCombined: "خوش آمدید. لطفا اطلاعات خود را برای ادامه وارد کنید",
      title: "حساب خود را بسازید",
      titleCombined: "حساب خود را بسازید",
    },
  },
  socialButtonsBlockButton: "Continue with {{provider|titleize}}",
  socialButtonsBlockButtonManyInView: "{{provider|titleize}}",
  unstable__errors: {
    already_a_member_in_organization:
      "{{email}} is already a member of the organization.",
    captcha_invalid:
      "Sign up unsuccessful due to failed security validations. Please try using a different browser or disabling browser extensions. If issues persist, contact support for assistance.",
    captcha_unavailable:
      "Sign up unsuccessful due to failed bot validation. Please refresh the page to try again or reach out to support for more assistance.",
    form_code_incorrect: undefined,
    form_identifier_exists__email_address:
      "This email address is taken. Please try another.",
    form_identifier_exists__phone_number:
      "This phone number is taken. Please try another.",
    form_identifier_exists__username:
      "This username is taken. Please try another.",
    form_identifier_not_found:
      "We couldn't find an account with those details.",
    form_param_format_invalid:
      "The value entered is in an invalid format. Please check and correct it.",
    form_param_format_invalid__email_address:
      "Email address must be a valid email address.",
    form_param_format_invalid__phone_number:
      "Phone number must be in a valid international format.",
    form_param_max_length_exceeded__first_name:
      "First name should not exceed 256 characters.",
    form_param_max_length_exceeded__last_name:
      "Last name should not exceed 256 characters.",
    form_param_max_length_exceeded__name:
      "Name should not exceed 256 characters.",
    form_param_nil: "This field is required and cannot be empty.",
    form_param_value_invalid:
      "The value entered is invalid. Please correct it.",
    form_password_incorrect:
      "The password you entered is incorrect. Please try again.",
    form_password_length_too_short:
      "Your password is too short. It must be at least 8 characters long.",
    form_password_not_strong_enough: "Your password is not strong enough.",
    form_password_pwned:
      "This password has been found as part of a breach and can not be used, please try another password instead.",
    form_password_pwned__sign_in:
      "This password has been found as part of a breach and can not be used, please reset your password.",
    form_password_size_in_bytes_exceeded:
      "Your password has exceeded the maximum number of bytes allowed, please shorten it or remove some special characters.",
    form_password_validation_failed: "Incorrect Password",
    form_username_invalid_character:
      "نام کاربری شما کاراکترهای غیرمجاز دارد. لطفا فقط از حروف انگلیسی، شماره و _ استفاده کنید.",
    form_username_invalid_length:
      "Your username must be between {{min_length}} and {{max_length}} characters long.",
    identification_deletion_failed:
      "You cannot delete your last identification.",
    not_allowed_access: undefined,
    organization_domain_blocked:
      "This is a blocked email provider domain. Please use a different one.",
    organization_domain_common:
      "This is a common email provider domain. Please use a different one.",
    organization_domain_exists_for_enterprise_connection:
      "This domain is already used for your organization’s SSO",
    organization_membership_quota_exceeded:
      "You have reached your limit of organization memberships, including outstanding invitations.",
    organization_minimum_permissions_needed:
      "There has to be at least one organization member with the minimum required permissions.",
    passkey_already_exists: "A passkey is already registered with this device.",
    passkey_not_supported: "Passkeys are not supported on this device.",
    passkey_pa_not_supported:
      "Registration requires a platform authenticator but the device does not support it.",
    passkey_registration_cancelled:
      "Passkey registration was cancelled or timed out.",
    passkey_retrieval_cancelled:
      "Passkey verification was cancelled or timed out.",
    passwordComplexity: {
      maximumLength: "کمتر از {{length}} کاراکتر باشد",
      minimumLength: "{{length}} کاراکتر یا بیشتر باشد.",
      requireLowercase: "یک حرف کوچک",
      requireNumbers: "یک عدد",
      requireSpecialCharacter: "یک کاراکتر ویژه (مانند @#$(&*))",
      requireUppercase: "یک حرف بزرگ",
      sentencePrefix: "رمز شما باید",
    },
    phone_number_exists: "This phone number is taken. Please try another.",
    session_exists: "You're already signed in.",
    web3_missing_identifier:
      "A Web3 Wallet extension cannot be found. Please install one to continue.",
    zxcvbn: {
      couldBeStronger:
        "رمز عبور شما قابل قبول است، اما می‌تواند قوی‌تر باشد. سعی کنید کاراکترهای بیشتری اضافه کنید.",
      goodPassword: "رمز عبور شما تمام شرایط را دارد.",
      notEnough: "رمز عبور شما قوی نیست.",
      suggestions: {
        allUppercase: "برخی حروف می‌توانند بزرگ باشند، اما نه همه آن‌ها.",
        anotherWord: "از کلمات کمتر رایج استفاده کنید.",
        associatedYears: "از به‌کارگیری تاریخ‌های شخصی خودداری کنید.",
        capitalization: "نباید فقط حرف اول بزرگ باشد.",
        dates: "از به‌کارگیری تاریخ‌های شخصی خودداری کنید.",
        l33t: "از جایگزینی‌های قابل پیش‌بینی مانند '@' به‌جای 'a' اجتناب کنید.",
        longerKeyboardPattern:
          "از الگوهای طولانی‌تر صفحه‌کلید استفاده کرده و چند بار جهت تایپ را تغییر دهید.",
        noNeed:
          "می‌توانید رمز عبور قوی ایجاد کنید بدون استفاده از نمادها، اعداد یا حروف بزرگ.",
        pwned:
          "اگر این رمز عبور را در جای دیگری نیز استفاده می‌کنید، بهتر است آن را تغییر دهید.",
        recentYears: "از سال‌های اخیر استفاده نکنید.",
        repeated: "کلمات و کاراکترها را تکرار نکنید.",
        reverseWords: "از نوشتن برعکس کلمات رایج خودداری کنید.",
        sequences: "از دنباله‌های کاراکتری رایج اجتناب کنید.",
        useWords: "از چند کلمه استفاده کنید، اما از عبارات رایج پرهیز کنید.",
      },
      warnings: {
        common: "این یک رمز عبور رایج است.",
        commonNames: "نام‌ها و نام خانوادگی‌های رایج به‌راحتی حدس زده می‌شوند.",
        dates: "تاریخ‌ها به‌راحتی حدس زده می‌شوند.",
        extendedRepeat:
          'الگوهای تکراری مانند "abcabcabc" به‌راحتی حدس زده می‌شوند.',
        keyPattern: "الگوهای کوتاه صفحه‌کلید به‌راحتی حدس زده می‌شوند.",
        namesByThemselves:
          "نام‌ها یا نام خانوادگی‌های تکی به‌راحتی حدس زده می‌شوند.",
        pwned: "رمز عبور شما در یک نشت اطلاعاتی فاش شده است.",
        recentYears: "سال‌های اخیر به‌راحتی حدس زده می‌شوند.",
        sequences:
          'دنباله‌های کاراکتری رایج مانند "abc" به‌راحتی حدس زده می‌شوند.',
        similarToCommon: "این رمز عبور شبیه به رمزهای رایج است.",
        simpleRepeat:
          'تکرار ساده کاراکترها مانند "aaa" به‌راحتی حدس زده می‌شود.',
        straightRow:
          "ردیف‌های مستقیم کلیدها در صفحه‌کلید به‌راحتی حدس زده می‌شوند.",
        topHundred: "این رمز عبور جزو ۱۰۰ رمز پرکاربرد است.",
        topTen: "این رمز عبور بسیار رایج است.",
        userInputs: "نباید هیچ داده شخصی یا مرتبط با صفحه در رمز عبور باشد.",
        wordByItself: "کلمات تکی به‌راحتی حدس زده می‌شوند.",
      },
    },
  },
  userButton: {
    action__addAccount: "افزودن حساب",
    action__manageAccount: "مدیریت حساب کاربری",
    action__signOut: "خروج از حساب",
    action__signOutAll: "Sign out of all accounts",
  },
  userProfile: {
    __experimental_billingPage: {
      paymentSourcesSection: {
        actionLabel__default: "Make default",
        actionLabel__remove: "Remove",
        add: "Add new payment source",
        addSubtitle: "Add a new payment source to your account.",
        cancelButton: "Cancel",
        formButtonPrimary__add: "Add Payment Method",
        formButtonPrimary__pay: "Pay {{amount}}",
        removeResource: {
          messageLine1: "{{identifier}} will be removed from this account.",
          messageLine2:
            "You will no longer be able to use this payment source and any recurring subscriptions dependent on it will no longer work.",
          successMessage:
            "{{paymentSource}} has been removed from your account.",
          title: "Remove payment source",
        },
        title: "Available options",
      },
      start: {
        headerTitle__invoices: "Invoices",
        headerTitle__paymentSources: "Payment Sources",
        headerTitle__plans: "Plans",
        headerTitle__subscriptions: "Subscriptions",
      },
      subscriptionsSection: {
        actionLabel__default: "Manage",
      },
      title: "Billing & Payments",
    },
    backupCodePage: {
      actionLabel__copied: "Copied!",
      actionLabel__copy: "Copy all",
      actionLabel__download: "Download .txt",
      actionLabel__print: "Print",
      infoText1: "Backup codes will be enabled for this account.",
      infoText2:
        "Keep the backup codes secret and store them securely. You may regenerate backup codes if you suspect they have been compromised.",
      subtitle__codelist: "Store them securely and keep them secret.",
      successMessage:
        "Backup codes are now enabled. You can use one of these to sign in to your account, if you lose access to your authentication device. Each code can only be used once.",
      successSubtitle:
        "You can use one of these to sign in to your account, if you lose access to your authentication device.",
      title: "Add backup code verification",
      title__codelist: "Backup codes",
    },
    connectedAccountPage: {
      formHint: "Select a provider to connect your account.",
      formHint__noAccounts:
        "There are no available external account providers.",
      removeResource: {
        messageLine1: "{{identifier}} will be removed from this account.",
        messageLine2:
          "You will no longer be able to use this connected account and any dependent features will no longer work.",
        successMessage:
          "{{connectedAccount}} has been removed from your account.",
        title: "Remove connected account",
      },
      socialButtonsBlockButton: "{{provider|titleize}}",
      successMessage: "The provider has been added to your account",
      title: "Add connected account",
    },
    deletePage: {
      actionDescription: 'Type "Delete account" below to continue.',
      confirm: "Delete account",
      messageLine1: "Are you sure you want to delete your account?",
      messageLine2: "This action is permanent and irreversible.",
      title: "Delete account",
    },
    emailAddressPage: {
      emailCode: {
        formHint:
          "An email containing a verification code will be sent to this email address.",
        formSubtitle: "Enter the verification code sent to {{identifier}}",
        formTitle: "Verification code",
        resendButton: "کد را دریافت نکردید؟ ارسال دوباره",
        successMessage:
          "The email {{identifier}} has been added to your account.",
      },
      emailLink: {
        formHint:
          "An email containing a verification link will be sent to this email address.",
        formSubtitle:
          "لطفا روی لینک فرستاده شده به آدرس {{identifier}} کلیک کنید",
        formTitle: "Verification link",
        resendButton: "پیامی دریافت نکردید؟ ارسال دوباره",
        successMessage:
          "The email {{identifier}} has been added to your account.",
      },
      enterpriseSSOLink: {
        formButton: "Click to sign-in",
        formSubtitle: "Complete the sign-in with {{identifier}}",
      },
      formHint: "ابتدا باید ایمیل خود را تایید کنید.",
      removeResource: {
        messageLine1: "{{identifier}} will be removed from this account.",
        messageLine2:
          "You will no longer be able to sign in using this email address.",
        successMessage: "{{emailAddress}} has been removed from your account.",
        title: "Remove email address",
      },
      title: "اضافه کردن آدرس ایمیل",
      verifyTitle: "تایید آدرس ایمیل",
    },
    formButtonPrimary__add: "اضافه کردن",
    formButtonPrimary__continue: "ادامه",
    formButtonPrimary__finish: "تمام",
    formButtonPrimary__remove: "حذف",
    formButtonPrimary__save: "ذخیره",
    formButtonReset: "لغو",
    mfaPage: {
      formHint: "Select a method to add.",
      title: "اضافه کردن تایید دو مرحله ای",
    },
    mfaPhoneCodePage: {
      backButton: "Use existing number",
      primaryButton__addPhoneNumber: "Add phone number",
      removeResource: {
        messageLine1:
          "{{identifier}} will be no longer receiving verification codes when signing in.",
        messageLine2:
          "Your account may not be as secure. Are you sure you want to continue?",
        successMessage:
          "SMS code two-step verification has been removed for {{mfaPhoneCode}}",
        title: "Remove two-step verification",
      },
      subtitle__availablePhoneNumbers:
        "Select an existing phone number to register for SMS code two-step verification or add a new one.",
      subtitle__unavailablePhoneNumbers:
        "There are no available phone numbers to register for SMS code two-step verification, please add a new one.",
      successMessage1:
        "When signing in, you will need to enter a verification code sent to this phone number as an additional step.",
      successMessage2:
        "Save these backup codes and store them somewhere safe. If you lose access to your authentication device, you can use backup codes to sign in.",
      successTitle: "SMS code verification enabled",
      title: "Add SMS code verification",
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: "Scan QR code instead",
        buttonUnableToScan__nonPrimary: "Can’t scan QR code?",
        infoText__ableToScan:
          "Set up a new sign-in method in your authenticator app and scan the following QR code to link it to your account.",
        infoText__unableToScan:
          "Set up a new sign-in method in your authenticator and enter the Key provided below.",
        inputLabel__unableToScan1:
          "Make sure Time-based or One-time passwords is enabled, then finish linking your account.",
        inputLabel__unableToScan2:
          "Alternatively, if your authenticator supports TOTP URIs, you can also copy the full URI.",
      },
      removeResource: {
        messageLine1:
          "Verification codes from this authenticator will no longer be required when signing in.",
        messageLine2:
          "Your account may not be as secure. Are you sure you want to continue?",
        successMessage:
          "Two-step verification via authenticator application has been removed.",
        title: "Remove two-step verification",
      },
      successMessage:
        "Two-step verification is now enabled. When signing in, you will need to enter a verification code from this authenticator as an additional step.",
      title: "افزودن برنامه Authenticator",
      verifySubtitle: "Enter verification code generated by your authenticator",
      verifyTitle: "Verification code",
    },
    mobileButton__menu: "Menu",
    navbar: {
      account: "پروفایل",
      billing: "Billing",
      description: "",
      security: "امنیت",
      title: "تنظیمات",
    },
    passkeyScreen: {
      removeResource: {
        messageLine1: "{{name}} will be removed from this account.",
        title: "Remove passkey",
      },
      subtitle__rename:
        "You can change the passkey name to make it easier to find.",
      title__rename: "Rename Passkey",
    },
    passwordPage: {
      checkboxInfoText__signOutOfOtherSessions:
        "بهتر است از تمامی دستگاه‌های قدیمی یکبار خارج شوید.",
      readonly:
        "Your password can currently not be edited because you can sign in only via the enterprise connection.",
      successMessage__set: "Your password has been set.",
      successMessage__signOutOfOtherSessions:
        "All other devices have been signed out.",
      successMessage__update: "Your password has been updated.",
      title__set: "تغییر رمز عبور",
      title__update: "تغییر رمز",
    },
    phoneNumberPage: {
      infoText:
        "A text message containing a verification code will be sent to this phone number. Message and data rates may apply.",
      removeResource: {
        messageLine1: "{{identifier}} will be removed from this account.",
        messageLine2:
          "You will no longer be able to sign in using this phone number.",
        successMessage: "{{phoneNumber}} has been removed from your account.",
        title: "Remove phone number",
      },
      successMessage: "{{identifier}} has been added to your account.",
      title: "Add phone number",
      verifySubtitle: "Enter the verification code sent to {{identifier}}",
      verifyTitle: "Verify phone number",
    },
    profilePage: {
      fileDropAreaHint: "اندازه پیشنهادی: 1:1 و حداکثر 5 مگابایت",
      imageFormDestructiveActionSubtitle: "حذف",
      imageFormSubtitle: "بارگذاری",
      imageFormTitle: "عکس پروفایل",
      readonly:
        "Your profile information has been provided by the enterprise connection and cannot be edited.",
      successMessage: "پروفایل شما به‌‌روز‌رسانی شد",
      title: "تغییر پروفایل",
    },
    start: {
      activeDevicesSection: {
        destructiveAction: "خروج دستگاه",
        title: "دستگاه‌های فعال",
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: "Reconnect",
        actionLabel__reauthorize: "Authorize now",
        destructiveActionTitle: "Remove",
        primaryButton: "اتصال به یک حساب",
        subtitle__disconnected: "This account has been disconnected.",
        subtitle__reauthorize:
          "The required scopes have been updated, and you may be experiencing limited functionality. Please re-authorize this application to avoid any issues",
        title: "اکانت‌های متصل",
      },
      dangerSection: {
        deleteAccountButton: "حساب من را حذف کن",
        title: "حذف حساب کاربری",
      },
      emailAddressesSection: {
        destructiveAction: "حذف ایمیل",
        detailsAction__nonPrimary: "انتخاب به عنوان اصلی",
        detailsAction__primary: "Complete verification",
        detailsAction__unverified: "تایید کنید",
        primaryButton: "یک ایمیل وارد کنید",
        title: "آدرس‌های ایمیل",
      },
      enterpriseAccountsSection: {
        title: "Enterprise accounts",
      },
      headerTitle__account: "جزئیات حساب کاربری",
      headerTitle__security: "امنیت",
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: "Regenerate",
          headerTitle: "Backup codes",
          subtitle__regenerate:
            "Get a fresh set of secure backup codes. Prior backup codes will be deleted and cannot be used.",
          title__regenerate: "Regenerate backup codes",
        },
        phoneCode: {
          actionLabel__setDefault: "Set as default",
          destructiveActionLabel: "Remove",
        },
        primaryButton: "افزودن تایید دو مرحله ای",
        title: "تایید دو مرحله ای",
        totp: {
          destructiveActionTitle: "Remove",
          headerTitle: "برنامه Authenticator",
        },
      },
      passkeysSection: {
        menuAction__destructive: "Remove",
        menuAction__rename: "Rename",
        primaryButton: "Add a passkey",
        title: "Passkeys",
      },
      passwordSection: {
        primaryButton__setPassword: "تغییر رمز عبور",
        primaryButton__updatePassword: "تغییر رمز",
        title: "رمز عبور",
      },
      phoneNumbersSection: {
        destructiveAction: "Remove phone number",
        detailsAction__nonPrimary: "Set as primary",
        detailsAction__primary: "Complete verification",
        detailsAction__unverified: "Verify phone number",
        primaryButton: "Add phone number",
        title: "Phone numbers",
      },
      profileSection: {
        primaryButton: "تغییر پروفایل",
        title: "پروفایل",
      },
      usernameSection: {
        primaryButton__setUsername: "Set username",
        primaryButton__updateUsername: "تغییر نام کاربری",
        title: "نام کاربری",
      },
      web3WalletsSection: {
        destructiveAction: "Remove wallet",
        detailsAction__nonPrimary: "Set as primary",
        primaryButton: "Connect wallet",
        title: "Web3 wallets",
      },
    },
    usernamePage: {
      successMessage: "Your username has been updated.",
      title__set: "Set username",
      title__update: "Update username",
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: "{{identifier}} will be removed from this account.",
        messageLine2:
          "You will no longer be able to sign in using this web3 wallet.",
        successMessage: "{{web3Wallet}} has been removed from your account.",
        title: "Remove web3 wallet",
      },
      subtitle__availableWallets:
        "Select a web3 wallet to connect to your account.",
      subtitle__unavailableWallets: "There are no available web3 wallets.",
      successMessage: "The wallet has been added to your account.",
      title: "Add web3 wallet",
      web3WalletButtonsBlockButton: "{{provider|titleize}}",
    },
  },
  waitlist: {
    start: {
      actionLink: "Sign in",
      actionText: "Already have access?",
      formButton: "Join the waitlist",
      subtitle:
        "Enter your email address and we’ll let you know when your spot is ready",
      title: "Join the waitlist",
    },
    success: {
      message: "You will be redirected soon...",
      subtitle: "We’ll be in touch when your spot is ready",
      title: "Thanks for joining the waitlist!",
    },
  },
} as const;
