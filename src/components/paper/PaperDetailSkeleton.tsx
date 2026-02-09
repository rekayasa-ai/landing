export default function PaperDetailSkeleton() {
    return (
        <div className="animate-pulse">
            {/* Hero Skeleton */}
            <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
                    {/* Impact Badge */}
                    <div className="flex justify-center mb-6">
                        <div className="h-10 w-48 bg-gray-200 rounded-full" />
                    </div>

                    {/* Title */}
                    <div className="space-y-3 mb-4">
                        <div className="h-8 bg-gray-200 rounded-lg mx-auto max-w-2xl" />
                        <div className="h-8 bg-gray-200 rounded-lg mx-auto max-w-xl" />
                    </div>

                    {/* Meta */}
                    <div className="flex justify-center gap-4 mb-8">
                        <div className="h-5 w-32 bg-gray-200 rounded" />
                        <div className="h-5 w-20 bg-gray-200 rounded" />
                    </div>

                    {/* Summary Box */}
                    <div className="bg-amber-50/50 rounded-2xl p-6 sm:p-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-xl" />
                            <div className="flex-1 space-y-3">
                                <div className="h-4 w-32 bg-amber-200/50 rounded" />
                                <div className="h-6 bg-amber-200/50 rounded" />
                                <div className="h-6 bg-amber-200/50 rounded w-4/5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breakdown Skeleton */}
            <section className="bg-gray-50 py-10 sm:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="w-12 h-12 bg-gray-200 rounded-xl mx-auto mb-4" />
                        <div className="h-8 w-40 bg-gray-200 rounded-lg mx-auto mb-2" />
                        <div className="h-5 w-64 bg-gray-200 rounded mx-auto" />
                    </div>

                    {/* Cards */}
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                                <div className="px-6 py-4 border-b border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gray-200 rounded-lg" />
                                        <div className="h-6 w-48 bg-gray-200 rounded" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 rounded-xl p-5 h-32" />
                                        <div className="bg-blue-50/50 rounded-xl p-5 h-32" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Glossary Skeleton */}
            <section className="bg-white py-10 sm:py-16 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="w-12 h-12 bg-gray-200 rounded-xl mx-auto mb-4" />
                        <div className="h-8 w-32 bg-gray-200 rounded-lg mx-auto mb-2" />
                        <div className="h-5 w-48 bg-gray-200 rounded mx-auto" />
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-5 h-28">
                                <div className="h-5 w-32 bg-gray-200 rounded mb-3" />
                                <div className="h-4 bg-gray-200 rounded" />
                                <div className="h-4 bg-gray-200 rounded w-4/5 mt-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
