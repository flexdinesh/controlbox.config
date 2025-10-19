return {
  {
    "mason-org/mason.nvim",
    opts = {
      ensure_installed = { "stylua", "prettier", "goimports", "gofumpt", "gomodifytags", "impl", "delve", "hadolint" },
    },
  },
}
