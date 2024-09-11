import { allLayers } from "@/util/layer_index";
import StakingTable from "@/components/tables/staking-table";
import Hero from "@/components/hero";

export default function StakingPage() {
    const sortedLayers = allLayers
        .filter((item) => item.staking)
        .sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
        );

    const typeFilters = [
        ...new Set(sortedLayers.map((layer) => layer.layerType)),
    ];

    const layerHeaders = [
        {
            name: "Name",
            showSorting: true,
            mobileLabel: "Name",
        },
        { name: "Risk", showSorting: false, mobileLabel: "Risk" },
        {
            name: "Type",
            showSorting: true,
            mobileLabel: "Type",
            filterOptions: typeFilters,
        },
        { name: "Status", showSorting: true, mobileLabel: "Status" },
        {
            name: "Unit of Account",
            showSorting: true,
            mobileLabel: "Unit",
        },
        { name: "BTC Locked", showSorting: true, mobileLabel: "BTC" },
    ];

    return (
        <div className="mx-auto">
            <Hero />
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                {/* {tabComponents[activeTab]} */}
                <StakingTable data={sortedLayers} headers={layerHeaders} />
            </div>
        </div>
    );
}