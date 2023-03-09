import Permissions from '../../security/permissions'
import QuickstartGuideService from '../../services/quickstartGuideService'
import PermissionChecker from '../../services/user/permissionChecker'

export default async (req, res) => {
  new PermissionChecker(req).validateHas(Permissions.values.quickstartGuideSettingsUpdate)

  const payload = await new QuickstartGuideService(req).updateSettings(req.body)

  await req.responseHandler.success(req, res, payload)
}
