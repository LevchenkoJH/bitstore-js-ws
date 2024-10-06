var config = {
  core_asset: "BSC",
  address_prefix: "BSC",
  expire_in_secs: 15,
  expire_in_secs_proposal: 24 * 60 * 60,
  review_in_secs_committee: 24 * 60 * 60,
  networks: {
    // BitShares: {
    //   core_asset: "BTS",
    //   address_prefix: "BTS",
    //   chain_id:
    //     "4018d7844c78f6a6c41c6a552b898022310fc5dec06da467ee7905a8dad512c8"
    // },
    Test: {
      core_asset: "BSC",
      address_prefix: "BSC",
      chain_id:
        "4476387c10501a7272f82d85de0d5884d22b77f3b917f9479cca30b236755e89"
    },
  },

  /** Set a few properties for known chain IDs. */
  setChainId: chain_id => {
    let result = Object.entries(config.networks).find(
      ([network_name, network]) => {
        if (network.chain_id === chain_id) {
          config.network_name = network_name;

          if (network.address_prefix) {
            config.address_prefix = network.address_prefix;
          }
          return true;
        }
      }
    );

    if (result) return { network_name: result[0], network: result[1] };
    else console.log("Unknown chain id (this may be a testnet)", chain_id);
  },

  reset: () => {
    config.core_asset = "BSC";
    config.address_prefix = "BSC";
    config.expire_in_secs = 15;
    config.expire_in_secs_proposal = 24 * 60 * 60;

    console.log("Chain config reset");
  },

  setPrefix: (prefix = "BSC") => (config.address_prefix = prefix)
};

export default config;
