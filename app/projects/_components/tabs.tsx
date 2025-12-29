type Props = {
	tabsData: {
		id: number;
		name: string;
	}[];
};

export default function Tabs({ tabsData }: Props) {
	return (
		<section className="grid grid-cols-3 flex-row gap-2">
			{tabsData.map((tab) => (
				<div key={tab.id}>
					<span className="border rounded-lg text-xs flex justify-center p-1 text-gray-500">
						{tab.name}
					</span>
				</div>
			))}
		</section>
	);
}
