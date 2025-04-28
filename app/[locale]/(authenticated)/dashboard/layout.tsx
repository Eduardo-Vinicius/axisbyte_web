import Sidebar from '@/components/CustomSidebar'

const navigation = {
  overview: [
    { name: 'Overview', href: '/dashboard', icon: "LayoutDashboard" },
    { name: 'projetos', href: '/dashboard/project', icon: "Activity" },
  ],
}

async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="hidden w-70 flex-shrink-0 flex-col md:flex border-r">
        <Sidebar navigation={navigation} />
      </div>
      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto bg-muted px-6 py-8 ">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout